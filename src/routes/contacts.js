import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contacts(props) {
    useEffect(() => {
        const apikey = 'bd1891a1-c42a-4520-9dae-edfbf7e2ad67',
            script = document.createElement('script');
        script.onload = () => {
            renderMap()
        };
        script.onerror = (err) => console.error('loading yamaps failed' + err);
        script.async = true;
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apikey}&lang=ru_RU`;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
            window.ymaps = null;
        }
    }, []);
    function renderMap() {
        let ymaps = window.ymaps;
        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map("yamaps", {
                center: [55.488013, 37.581995],
                zoom: 10,
                controls: ['fullscreenControl']
            }, {
                searchControlProvider: 'yandex#search'
            });
            var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    position: {
                        left: 'auto',
                        right: 10,
                        top: 108,
                        bottom: 'auto'
                    }
                }
            });
            myMap.controls.add(zoomControl);

            myMap.geoObjects
                .add(new ymaps.Placemark([55.487767, 37.594851], {
                    balloonContent: '<h3>Склад Luminaire</h3>'
                }, {
                    preset: 'islands#redDotIcon'
                }))
            myMap.behaviors.disable('scrollZoom');
        }

    }
    return (
        <div className='app'>
            <Header cart={props.state.cart} onRemove={props.removeFromeCart} />
            <div id='yamaps'></div>
            <div className='text-page'>
                <h1>Контактная информация</h1>
                <p>Режим работы: с 9:00 до 18:00 (ежедневно)</p>
                <p>Телефон: 8 (800) 777-15-37</p>
                <p>E-mail: hello@luminaire</p>
                <p>Адрес склада: МО, г. Подольск, д. Борисовка, тер. «НКН-Строй», с1</p>
            </div>
            <Footer />
        </div>
    )
}
