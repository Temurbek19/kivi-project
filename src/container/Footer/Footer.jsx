import { useState } from 'react';

import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    const [ activeLink, setActiveLink ] = useState("one");
    return(
        <div className="footer">
            <div className="footer-bottom">
                <div className="footer-bottom-block">
                    <div className="footer-bottom-block-item">
                        <h4>Автомобили</h4>
                        <Link className="span">Легковые авто</Link>
                        <Link className="span">Мото</Link>
                        <Link className="span">Автобусы</Link>
                        <Link className="span">Грузовые авто</Link>
                        <Link className="span">Сельхозтехника</Link>
                        <Link className="span">Запчасти и Аксессуары</Link>
                        <Link className="span">Прицепы и Спецтехника</Link>
                        <Link className="span">Водный и Другой транспортa</Link>
                    </div>
                    <div className="footer-bottom-block-item">
                        <h4>Дом и Сад</h4>
                        <Link className="span">Товары для интерьера</Link>
                        <Link className="span">Товары для сада</Link>
                        <Link className="span">Растения</Link>
                        <Link className="span">Продукты питания</Link>
                        <Link className="span">Посуда и Кухонная утварь</Link>
                        <Link className="span">Хоз.инвентарь и Бытовая химия</Link>
                        <Link className="span">Канцтовары и Расходные</Link>
                        <Link className="span">Прочие товары для дома</Link>
                    </div>
                </div>
                <div className="footer-bottom-block">
                    <div className="footer-bottom-block-item">
                        <h4>Недвижимость</h4>
                        <Link className="span">Аренда квартир</Link>
                        <Link className="span">Аренда домов</Link>
                        <Link className="span">Аренда гаражей и Стоянок</Link>
                        <Link className="span">Продажа квартир</Link>
                        <Link className="span">Продажа домов</Link>
                        <Link className="span">Продажа земли</Link>
                        <Link className="span">Продажа гаражей/Стоянок</Link>
                        <Link className="span">Аренда помещений</Link>
                        <Link className="span">Продажа помещений</Link>
                        <Link className="span">Прочая недвижимость</Link>
                        <Link className="span">Обмен недвижимости</Link>
                        <Link className="span">Коммерческая недвижимость</Link>
                    </div>
                    <div className="footer-bottom-block-item">
                        <h4>Товары стройки и ремонта</h4>
                        <Link className="span">Инструменты</Link>
                        <Link className="span">Двери и окна</Link>
                        <Link className="span">Сантехника</Link>
                        <Link className="span">Стройматериалы</Link>
                    </div>
                </div>
                <div className="footer-bottom-block">
                    <div className="footer-bottom-block-item">
                        <h4>Электроника</h4>
                        <Link className="span">Телефоны</Link>
                        <Link className="span">Компьютеры</Link>
                        <Link className="span">Ноутбуки, планшеты</Link>
                        <Link className="span">Оргтехника и расходники</Link>
                        <Link className="span">ТВ,Фото,Видео и Аудио</Link>
                        <Link className="span">Игры и Приставки</Link>
                        <Link className="span">Техника для дома и Для себя</Link>
                        <Link className="span">Климатическое оборудование</Link>
                        <Link className="span">Аксессуары и Комплектующие</Link>
                        <Link className="span">Техника для наблюдения</Link>
                        <Link className="span">Прочая электроника</Link>
                    </div>
                    <div className="footer-bottom-block-item">
                        <h4>Хобби, Отдых и Спорт</h4>
                        <Link className="span">Антиквариат и Коллекции</Link>
                        <Link className="span">Музыкальные инструменты</Link>
                        <Link className="span">Велосипеды</Link>
                        <Link className="span">Товары для спорта и отдыха</Link>
                        <Link className="span">Книги/Журналы</Link>
                        <Link className="span">CD/DVD/Пластинки/Кассеты</Link>
                        <Link className="span">Билеты и путешествия</Link>
                        <Link className="span">Охота и рыбалка</Link>
                    </div>
                </div>
                <div className="footer-bottom-block">
                    <div className="footer-bottom-block-item">
                        <h4>Личные вещи</h4>
                        <Link className="span">Одежда, обувь, аксессуары</Link>
                        <Link className="span">Детская одежда и обувь</Link>
                        <Link className="span">Детские товары и Игрушки</Link>
                        <Link className="span">Школьникам</Link>
                        <Link className="span">Часы и украшения</Link>
                        <Link className="span">Товары для красоты и здоровья</Link>
                        <Link className="span">Разные вещи</Link>
                    </div>
                    <div className="footer-bottom-block-item">
                        <h4>Бизнес и услуги</h4>
                        <Link className="span">Оборудование и аренда</Link>
                        <Link className="span">Сырьё и материалы</Link>
                        <Link className="span">Производство и обработка</Link>
                        <Link className="span">Продажа бизнеса и партнерство</Link>
                        <Link className="span">Финансовые услуги/Бухгалтерия</Link>
                        <Link className="span">Услуги для красоты и здоровья</Link>
                        <Link className="span">Услуги курьера и доставки</Link>
                        <Link className="span">Реклама, Полиграфия и Маркетинг</Link>
                        <Link className="span">Няни, Сиделки и Домработницы</Link>
                        <Link className="span">Обучение, курсы и репетиторы</Link>
                        <Link className="span">Фото, видео, искусство и дизайн</Link>
                        <Link className="span">Перевод и Набор текста</Link>
                        <Link className="span">Юридические услуги</Link>
                        <Link className="span">Прокат товаров</Link>
                        <Link className="span">Туризм и спорт</Link>
                        <Link className="span">Праздники и мероприятия</Link>
                        <Link className="span">Перевозки и Аренда авто</Link>
                        <Link className="span">Услуги спецтехники</Link>
                        <Link className="span">Автосервис</Link>
                        <Link className="span">Услуги такси</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom2">
                <Link onClick={() => setActiveLink('one')} className={`link-footer-bottom ${activeLink==='one' ? 'active' : ''}`}>Подать объявление</Link>
                <Link onClick={() => setActiveLink('two')} className={`link-footer-bottom ${activeLink==='two' ? 'active' : ''}`}>Объявления</Link>
                <Link onClick={() => setActiveLink('three')} className={`link-footer-bottom ${activeLink==='three' ? 'active' : ''}`}>Магазины</Link>
                <Link onClick={() => setActiveLink('four')} className={`link-footer-bottom ${activeLink==='four' ? 'active' : ''}`}>Помощь</Link>
                <Link onClick={() => setActiveLink('five')} className={`link-footer-bottom ${activeLink==='five' ? 'active' : ''}`}>Безопасность</Link>
                <Link onClick={() => setActiveLink('six')} className={`link-footer-bottom ${activeLink==='six' ? 'active' : ''}`}>Реклама на сайте</Link>
                <Link onClick={() => setActiveLink('seven')} className={`link-footer-bottom ${activeLink==='seven' ? 'active' : ''}`}>О компании</Link>
            </div> 
        </div>
    )
};

export default Footer;