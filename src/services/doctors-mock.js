import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
import avatar5 from '../assets/avatar5.png'
import avatar6 from '../assets/avatar6.png'
import avatar7 from '../assets/avatar7.png'
import avatar8 from '../assets/avatar8.png'
import avatar9 from '../assets/avatar9.png'
import avatar10 from '../assets/avatar10.png'
import avatar11 from '../assets/avatar11.png'
import avatar12 from '../assets/avatar12.png'
import avatar13 from '../assets/avatar13.png'
import hospitalBh from '../assets/HospitalBH.png'
import hospitalCuritiba from '../assets/HospitalCuritiba.png'
import hospitalRJ from '../assets/HospitalRJ.png'
import clinicaDermatologica from '../assets/ClinicaDermatologica.png'
import clinicaGinecologica from '../assets/ClinicaGinecologica.png'
import clinicaOdotonlogica from '../assets/ClinicaOdontologica.png'

export const doctors = [
    {
        name: 'Dr. Marco Felipe Franco Rosa',
        crm: '181018',
        speciality: 'Cirurgião Plástico',
        photo: avatar1,
        rating: 5,
        contactNumber: '(31) 98888-9999',
        city: 'Rio de Janeiro',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        addres: 'Rua Coronel Cardoso, Centro, Goytacazes, RJ - 13216000',
        placeOfService: hospitalRJ
    },
    {
        name: 'Dr. Fábio Araújo Litwinczuk',
        crm: '128883',
        speciality: 'Dermatologista',
        photo: avatar2,
        rating: 5,
        contactNumber: '(11) 91111-2222',
        city: 'São Paulo',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        addres: 'Avenida São João, Vila Joana, Jundiaí, SP - 13216000',
        placeOfService: clinicaDermatologica
    },
    {
        name: 'Dra. Andrea Menezes Gonçalves',
        crm: '890537',
        speciality: 'Dermatologista',
        photo: avatar3,
        rating: 5,
        contactNumber: '(11) 92222-3333',
        city:'São Paulo',
        description: 'Content here, content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on',
        addres: 'Rua Paracatu, Parque Imperial, SP - 04302021',
        placeOfService: clinicaDermatologica
    },
    {
        name: 'Dr. Igor Castro de Souza',
        crm: '20446',
        speciality: 'Cirurgião Plástico',
        photo: avatar4,
        rating: 5,
        contactNumber: '(41) 93333-4444',
        city: 'Curitiba',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua Nibet Deucher, 644, Cidade Industrial, PR - 81170-295',
        placeOfService: hospitalCuritiba
    },
    {
        name: 'Dr. Rubens Machado Cat',
        crm: 'PR9473',
        speciality: 'Dermatologista',
        photo: avatar5,
        rating: 4,
        contactNumber: '(41) 1234-5678',
        city: 'Curitiba',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua Monsenhor Celso 219, 139, Centro, PR - 80010-921',
        placeOfService: clinicaDermatologica
    },
    {
        name: 'Dra. Renata Gil Nisenbaum',
        crm: '97885',
        speciality: 'Ginecologista',
        photo: avatar6,
        rating: 5,
        contactNumber: '(11) 92234-5647',
        city: 'Belo Horizonte',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua Cambé, 459, Coqueiros, MG - 30880-440',
        placeOfService: clinicaGinecologica
    },
    {
        name: 'Dra. Renata Wilbert Souza',
        crm: '133725',
        speciality: 'Dentista',
        photo: avatar7,
        rating: 5,
        contactNumber: '(31) 92434-5651',
        city: 'Belo Horizonte',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua José Cleto, 382, Santa Cruz, MG - 31155-290',
        placeOfService: clinicaOdotonlogica
    },
    {
        name: 'Dra. Isabelle Lima Silva',
        crm: '564734',
        speciality: 'Dentista',
        photo: avatar8,
        rating: 5,
        contactNumber: '(31) 94453-9997',
        city: 'Belo Horizonte',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua Um Mil Setecentos e Vinte e Dois, 542, Santa Cruz (Barreiro), MG - 30644-204',
        placeOfService: clinicaOdotonlogica
    },
    {
        name: 'Dr. Pedro Henrique Bardo',
        crm: '122334',
        speciality: 'Fisioterapeuta',
        photo: avatar9,
        rating: 5,
        contactNumber: '(21) 98734-2345',
        city: 'Rio de Janeiro',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Avenida Rio Branco, Centro, RJ - 20040002',
        placeOfService: hospitalRJ
    },
    {
        name: 'Dr. Breno Bartolomeu Siqueira',
        crm: '9245635',
        speciality: 'Fisioterapeuta',
        photo: avatar10,
        rating: 5,
        contactNumber: '(31) 99342-5747',
        city: 'Belo Horizonte',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua Desembargador Paulo Mota, 332, Ouro Preto, MG - 31310-340',
        placeOfService: hospitalBh
    },
    {
        name: 'Dr. Alceu Marques',
        crm: '9325765',
        speciality: 'Dentista',
        photo: avatar11,
        rating: 5,
        contactNumber: '(85) 1114-5677',
        city: 'Fortaleza',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua José Mendonça, 245, Parque Genibaú, CE - 60534-090',
        placeOfService: clinicaOdotonlogica
    },
    {
        name: 'Dr. Luan Junior Pereira',
        crm: '654575',
        speciality: 'Psiquiatra',
        photo: avatar12,
        rating: 5,
        contactNumber: '(31) 92034-5007',
        city: 'Belo Horizonte',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua Doutor Fernando Scarpelli, 831, Castelo, MG - 30840-370',
        placeOfService: hospitalBh
    },
    {
        name: 'Dra. Mariana de Brites',
        crm: '1235445',
        speciality: 'Ginecologista',
        photo: avatar13,
        rating: 5,
        contactNumber: '(11) 96464-5647',
        city: 'São Paulo',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        addres: 'Rua das Fiandeiras, Vila Olímpia, SP - 04545005',
        placeOfService: clinicaGinecologica
    },
]