import React from "react";
import aboutImage from "../../assets/images/about_imgae.webp";
import footerImage from "../../assets/images/footer-image.webp";
import './Home.scss'
function Home() {
  return (
    <div className="Home">
      <div className="about__me">
        <div className="about__image-box">
          <img src={aboutImage} className="about__image" alt="about" />
        </div>
        <div className="about__subtitle">
          <h1 className="about__title">Обо мне</h1>
          <div className="line"></div>
          <div className="about__text-box">
            <p className="about__text">
              Это текст. Нажмите один раз и выберите «Редактировать текст» или
              просто кликните дважды, чтобы добавить свой текст и настроить
              шрифт. Вы можете переместить его в любое место на странице.
              Расскажите посетителям сайта о себе.
            </p>
            <p className="about__text">
              Здесь будет удачно смотреться текст о вашей компании и услугах.
              Используйте эту возможность, чтобы выгодно представить себя и свою
              компанию клиентам
            </p>
            <p className="about__text">
              Расскажите интересную историю, например, как вам в голову пришла
              идея собственного дела, и объясните, в чем заключается ваше
              преимущество перед конкурентами. Приводите увлекательные факты и
              цифры. Не забудьте про ключевые слова, по которым ваш сайт найдут
              в поисковых системах. Чтобы добавить свое фото, нажмите на
              изображение и выберите «Заменить фото».
            </p>
          </div>
        </div>
      </div>
      {/* ============= About ============= */}

      <div className="picture"></div>

      {/* ============= contact ============= */}

     <div className="contact">
      <div className="contact__features">
        <h1 className="contact__title">Свяжитесь со мной</h1>
        <div className="line"></div>
        <p className="contact__text">ул. Арбат, 1а, Москва, Россия</p>
        <p className="contact__text">Телефон: +7 (495) 000-00-00 </p>
        <p className="contact__text">info@mysite.ru</p>

        <form>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="gmail"></input>
          <input type="tel" placeholder="Namber"></input>
          <textarea rows="8" cols="40" placeholder="Add a message..."></textarea>
        </form>
        <button className="contact__btn">Send</button>
      </div>
      <div className="contact__image">
        <img src={footerImage} alt="harsik"/>
      </div>
     </div>
     

    </div>
  );
}

export default Home;
