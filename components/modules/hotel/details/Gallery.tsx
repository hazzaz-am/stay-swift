import Image from "next/image";

const Gallery = ({gallery}: {gallery: string[]}) => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase">
        <Image src={gallery[0]} className="h-[400px] object-cover" alt="" height={400} width={400}/>

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {
            gallery.map((img, i) => (
              <Image key={img + i} src={img} alt="" width={240} height={240} className="object-cover hover:scale-105 transition-all"/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
