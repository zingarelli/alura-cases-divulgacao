// import Link from 'next/link';

// // aplicando estilo local com css-in-js
// // enviando via prop "as" o elemento que deve ser utilizando para renderizar o título
// function Title({ children, as: banana }) {
//     const Tag = banana;
//     return (
//         <>
//             <Tag>{children}</Tag>
//             <style jsx>{`
//                 ${Tag} {
//                     font-family: sans-serif;
//                 } 
//             `}</style>
//         </>
//     )
// }

// export default function HomePage() {
//     return (
//         <div>
//             <Title as='h1'>Página inicial</Title>
//             <Link href="/faq">Ver o FAQ</Link>            
//         </div>
//     )
// }

import HomeScreen from "../src/screens/HomeScreen";

export default HomeScreen;