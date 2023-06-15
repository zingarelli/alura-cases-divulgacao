// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import PageTitle from '../src/components/PageTitle';

import FAQScreen from "../src/screens/FAQScreen";
export default FAQScreen;

// Em produção, o conteúdo será resolvido pelo servidor DURANTE O BUILD e enviado à 
// página via props. Dessa forma, a página já será construída com esse conteúdo.
// Útil para sites estáticos, cujo conteúdo não muda. Caso haja alteração no conteúdo,
// é necessário um novo build.
export async function getStaticProps() {
    const API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

    const faq = await fetch(API_URL)
        .then(resp => resp.json())
        .then(data => data);

    return {
        props: {
            faq
        }
    }
}

// Em produção, o conteúdo será resolvido pelo servidor A CADA ACESSO À PÁGINA e enviado 
// a ela via props. Dessa forma, a página já será construída com esse conteúdo.
// Útil para sites dinâmicos, cujo conteúdo pode ser alterado com o tempo.
// export async function getServerSideProps() {
//     const API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

//     const faq = await fetch(API_URL)
//         .then(resp => resp.json())
//         .then(data => data);

//     return {
//         props: {
//             faq
//         }
//     }
// }

// export default function FaqPage({ faq }) {
//     return (
//         <div>
//             <PageTitle>FAQ | Alura Cases Campanha</PageTitle>
//             <h1>Dúvidas mais frequentes.</h1>
//             <Link href="/">Voltar para Home</Link>
//             <ul>
//                 {faq.map(({ question, answer }) => (
//                     <li key={question}>
//                         <h2>{question}</h2>
//                         <p>{answer}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }