import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          
          mainHeader={'Hakkımızda'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Biz, lezzetin ve misafirperverliğin buluştuğu bir noktayız. İstanbul'un kalbinde, foodDB olarak 2020 yılında kurulduk. O günden beri, lezzetin sınırlarını zorlayan ve misafirlerimize unutulmaz bir deneyim sunan bir  işletmesiyiz.
          </p>
          <p>Yıllar içinde edindiğimiz deneyim ve tutku, her tabakta ve her siparişte hissedilir. foodDB, İstanbul'un çeşitli lezzetlerini buluşturan bir mozaik gibi, şehrin zengin gastronomik kültürünü yansıtıyor.
</p>
          <p>Misafir memnuniyeti, işimizin merkezinde yer alır. Her bir müşterimizi ağırlarken, sadece yemeğin tadını değil, aynı zamanda kalplerini de kazanmayı hedefliyoruz. Şeffaf iletişim, özenli hizmet ve lezzetin doruklarında bir deneyim için buradayız.</p>
          <p>Sizleri, foodDB ailesine katılmaya ve lezzet yolculuğumuza ortak olmaya davet ediyoruz. İyi yemek, iyi dostluk ve unutulmaz anlar için, bizi tercih ettiğiniz için teşekkür ederiz.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Tereddüt etmeyin!'}
          mainHeader={'Bizimle İletişime Geçin'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +90 554 690 00 88
          </a>
        </div>
      </section>
    </>
  )
}
