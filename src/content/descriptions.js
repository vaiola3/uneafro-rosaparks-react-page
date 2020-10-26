import imageVilar from "../img/teach-vilar.jpeg"
import imageAlk from "../img/teach-alk.jpeg"
import imageJannis from "../img/teach-jannis.jpeg"
import imageAdriano from "../img/teach-adriano.jpeg"

import imageFacebook from "../img/social-button-facebook.png"
import imageInstagram from "../img/social-button-instagram.png"
import imageYoutube from "../img/social-button-youtube.png"

const linkFacebook = "https://www.google.com/"
const texts = {
    about: {
        uneafro: {
            title: "Sobre nós",
            description: "A UNEafro é um movimento que se organiza em núcleos de atuação em diversas áreas. O trabalho mais conhecido são os cursinhos pré-vestibulares comunitários que atendem jovens e adultos oriundos de escolas públicas, prioritariamente negros/as, que sonham em ingressar no Ensino Superior e preparar-se para o ENEM ou Concursos Públicos."
        },
        nucleo: {
            title: "Sobre o núcleo",
            description: "A UNEafro é um movimento que se organiza em núcleos de atuação em diversas áreas. O trabalho mais conhecido são os cursinhos pré-vestibulares comunitários que atendem jovens e adultos oriundos de escolas públicas, prioritariamente negros/as, que sonham em ingressar no Ensino Superior e preparar-se para o ENEM ou Concursos Públicos."
        },
    },
    teachers: [
        {
            name: "Anderson Vilar",
            teach: "História",
            about: "Sou professor licenciado em História e militante do cursinho Rosa Parks desde 2013. Atualmente faço parte da coordenação.",
            image: imageVilar
        },
        {
            name: "Anderson Alk",
            teach: "Português",
            about: "Sou professor de Língua Portuguesa (Linguagens, Códigos e Técnicas de Redação) e militante do cursinho Rosa Parks desde 2013.",
            image: imageAlk
        },
        {
            name: "Jannis Ribeiro",
            teach: "Inglês",
            about: "Sou professora de Língua Inglesa e Atualidades. Militante do Núcleo Rosa Parks desde 2019",
            image: imageJannis
        },
        {
            name: "Adriano Souza",
            teach: "História",
            about: "Sou professor de História & Atualidades, e também de Formação Política. Estou no Núcleo desde 2016.",
            image: imageAdriano
        }
    ],
    buttonsPath: [
        {
            name: "Facebook",
            image: imageFacebook,
            url: linkFacebook
        },
        {
            name: "Instagram",
            image: imageInstagram,
            url: "www.google.com"
        },
        {
            name: "Youtube",
            image: imageYoutube,
            url: "www.google.com"
        }
    ]
}

export default texts