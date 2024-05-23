"use client";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import FavoritesList from "../app/FavoritesList";  // Doğru yolu belirleyin

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="fav">
        <SectionHeaders 
        subHeader={'En beğendikleriniz!'}
        mainHeader={'Favorileriniz'} />
        <FavoritesList />
      </section>
      <section className="text-center my-16" id="about">
        <SectionHeaders mainHeader={'Hakkımızda'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Hoş geldiniz! Lezzet dolu bir maceraya hazır mısınız? Biz, FoodDB olarak  İstanbul'un hızlı tempolu yaşam tarzına ayak uyduran, lezzetin hızını ve keyfini bir araya getiren bir fast food deneyimi sunuyoruz. 2020 yılında İstanbul'da doğduk ve o zamandan beri şehrin en iştah açıcı adreslerinden biri olduk.
          </p>
          <p>
            Müşterilerimize hızlı, lezzetli ve doyurucu yemekler sunarken, aynı zamanda onlara evlerindeymiş gibi rahat hissettirmek için çalışıyoruz. FoodDB, kaliteli malzemelerle hazırladığı atıştırmalıkları ve özel tariflerini sunmaktan gurur duyar.
          </p>
          <p>
            Müşteri memnuniyeti, bizim için her şeyin önünde gelir. Her siparişi birinci önceliğimiz olarak görüyoruz ve her müşteriye en iyi hizmeti sunmak için çaba gösteriyoruz. Siz değerli misafirlerimizi ağırlamak ve sizi tatmin etmek için buradayız.
          </p>
          <p>
            Sizi, FoodDB ailesine katılmaya ve lezzet dolu bir yolculuğa çıkmaya davet ediyoruz. İyi yemek, keyifli anlar ve tatmin edici bir deneyim için bizi tercih ettiğiniz için teşekkür ederiz.
          </p>
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
  );
}
