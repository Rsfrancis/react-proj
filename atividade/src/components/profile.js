import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      <Image src="/eu.jpeg" alt="Minha Foto" width={150} height={150} />
      <h2>Artur Francisco Damascena</h2>
      <p>Sou estudante de programação e estou aprendendo Front-End.</p>
      <p>Tenho 19 anos e gosto de escutar musicas!</p>
      <p>e sou estudante da catolica!</p>
    </div>
  );
}
