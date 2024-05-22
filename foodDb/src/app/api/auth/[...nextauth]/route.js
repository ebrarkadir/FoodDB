import clientPromise from "@/libs/mongoConnect";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import { User } from "@/models/User";
import { UserInfo } from "@/models/UserInfo";
import NextAuth, { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if (passwordOk) {
          // Kullanıcı başarılı bir şekilde doğrulandı, UserInfo modeline kullanıcı bilgilerini kaydet
          const userInfo = new UserInfo({
            email: user.email, // ya da credentials.email olarak güncellenebilir
            // Diğer bilgileri de credentials'dan alabilirsiniz, bu örnekte veritabanında bulunan bilgileri kullanıyorum
            // Eğer credentials'tan almak istiyorsanız gelen verileri burada kullanabilirsiniz
            streetAddress: "Örnek Sokak 123",
            postalCode: "12345",
            city: "Örnek Şehir",
            country: "Örnek Ülke",
            phone: "+1234567890",
            admin: false, // veya true, kullanıcı yönetici ise
          });
          await userInfo.save();

          return user;
        }

        return null;
      },
    }),
  ],
};

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({ email: userEmail });
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
