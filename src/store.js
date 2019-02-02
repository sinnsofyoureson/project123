import { createStore } from 'redux';
import crmApp from './reducers/reducers';
import uuid from 'uuid';

const initialState = {
    clients: [
      {
        id: uuid.v4(),
        name: 'Ринат',
        middlename: 'Юрьевич',
        surname: 'Москвин',
        phone: '+7-900-311-21-14',
        email: 'test@test.com',
        city: 'Энгельс',
        info: '',
        objects: 'object 1',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Tom',
        middlename: '',
        surname: 'Major',
        phone: '(202) 358-0001 (Office)',
        email: 'm.tom@davidbowietribute.com',
        city: 'Cape Canaveral',
        info: 'Take your protein pills and put your helmet on',
        objects: 'object 51',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Гавриил',
        middlename: 'Самуилович',
        surname: 'Гайзенберг',
        phone: '+7(169)908-16-14',
        email: 'g.gavriil@test.com',
        city: 'Эль Пуэблито, Мексика',
        info: '',
        objects: '338 Cedar Rd. Miami, FL 33193',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Тимофей',
        middlename: 'Богданович',
        surname: 'Макаров',
        phone: '+7(69)951-95-24',
        email: 'timofei.makarov@test.com',
        city: 'Дельменхорст, Германия',
        info: '',
        objects: '936 Primrose Rd. Saint Petersburg, FL 33713',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Мефодий',
        middlename: 'Капитонович',
        surname: 'Гольдшмидт',
        phone: '+7(987)045-65-16',
        email: 'goldshmidt.mefodiixy@test.com',
        city: 'Тандер-Бей, Канада',
        info: '',
        objects: '8517 Rock Creek St. Pensacola, FL 32503',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Руслан',
        middlename: 'Анастасьевич',
        surname: 'Пестов',
        phone: '+7(16)331-73-86',
        email: 'r.pestov.moon@test.com',
        city: 'Исабела, Филиппины',
        info: '',
        objects: '7630 Taylor Ave. Orange Park, FL 32073',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Сильвестр',
        middlename: 'Иларионович',
        surname: 'Перельман',
        phone: '+7(72)775-23-40',
        email: 's.perelman019@test.com',
        city: 'Селайя, Мексика',
        info: '',
        objects: '417 Thomas St. Miami, FL 33134',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Герман',
        middlename: 'Пантелеимонович',
        surname: 'Шапиро',
        phone: '+7(00)670-83-39',
        email: 's.germanter@test.com',
        city: 'Басар, Того',
        info: '',
        objects: '830 10th Ave. Sarasota, FL 34231',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Герасим',
        middlename: 'Исидорович',
        surname: 'Хейфиц',
        phone: '+7(32)506-36-81',
        email: 'g.kheifits@test.com',
        city: 'Эскобедо, Мексика',
        info: '',
        objects: '8 East Alderwood Ave. Tallahassee, FL 32304',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Аарон',
        middlename: 'Маврович',
        surname: 'Цигельман',
        phone: '+7(0966)002-21-37',
        email: 't.aaron@test.com',
        city: 'Маргилан, Узбекистан',
        info: '',
        objects: '7359 Selby Street Hialeah, FL 33013',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Авдий',
        middlename: 'Анфимович',
        surname: 'Мендель',
        phone: '+7(0854)545-88-08',
        email: 'avdii.mendel@test.com',
        city: 'Янсан, Ю.Корея',
        info: '',
        objects: '9 Windfall Street Tampa, FL 33612',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        name: 'Мирон',
        middlename: 'Янович',
        surname: 'Фёдоров',
        phone: '+7(453)435-19-72',
        email: 'oxxxy@test.com',
        city: 'Cанкт-Петербург, РФ',
        info: '',
        objects: '31 SW. Creekside Ave. Miami, FL 33135',
        active: true,
        shown: false
      },
    ],
    
    objects: [
      {
        id: uuid.v4(),
        type: 'недвижимость',
        address: 'object 1',
        client: 'Ринат Москвин',
        contract: '# 709-2017',
        services: 'охрана, видеонаблюдение, датчик воды, датчик дыма',
        status: 'ожидает оплаты',
        date: '07.09.2017',
        expiration: 'нет',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        type: 'недвижимость',
        address: 'object 51',
        client: 'Major Tom',
        contract: '# 001-1969',
        services: 'охрана, видеонаблюдение, датчик воды',
        status: 'действует',
        date: '11.07.1969',
        expiration: 'бесконечный',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        type: 'недвижимость',
        address: '31 SW. Creekside Ave. Miami, FL 33135',
        client: 'Мирон Янович',
        contract: '# 001-2015',
        services: 'охрана, видеонаблюдение,',
        status: 'отключен',
        date: '13.11.2015',
        expiration: '',
        active: true,
        shown: false
      },
      {
        id: uuid.v4(),
        type: 'недвижимость',
        address: '9 Windfall Street Tampa, FL 33612',
        client: 'Авдий Мендель',
        contract: '# 123-2019',
        services: 'охрана',
        status: 'действует',
        date: '23.01.2019',
        expiration: '23.01.2021',
        active: true,
        shown: false
      },
    ]
}

let store = createStore(crmApp, initialState);

export default store