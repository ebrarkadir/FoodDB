import Right from "../../components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
        &nbsp;
          <span className="text-primary">
          FoodDB
          </span><br />
           ile lezzette<br />
          sınır yok<br />
          
        </h1>
        <p className="my-6 text-gray-500 text-sm">
        Lezzetli bir yemek,sevdiklerinizle bir araya gelerek paylaşılan keyifli anların başrol oyuncusudur.
        </p>
       
      </div>
      <div className="relative hidden md:block">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}