import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* mask */}
      <div className="fixed z-10 left-0 top-0 h-full w-full pointer-none ">
        <div className="absolute left-0 w-full h-10 top-0 opacity-100 bg-white " />
        <div className="absolute left-0 w-full h-10 bottom-0 opacity-100 bg-white " />
      </div>
      {/* frame */}
      <div className="fixed z-10 top-10 left-10 right-10 bottom-10 pointer-events-none">
        <div className="left-0 top-0 h-full w-px absolute bg-black" />
        <div className="right-0 bottom-0 h-full w-px absolute bg-black" />
        <div className="left-0 bottom-0 h-px w-full absolute bg-black" />
        <div className="left-0 top-0 h-px w-full absolute bg-black" />
      </div>
      {/* content */}
      <div className="flex flex-col m-10 px-2 h-screen bg-cover bg-emoi">
        <div className="text-4xl t">Taito Miyasako</div>
        <div className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
          bibendum mi. Nunc congue faucibus lacus id sollicitudin. Etiam
          consectetur ex vitae urna lacinia eleifend. Aliquam accumsan augue ut
          nulla porta accumsan. Fusce at suscipit nulla, in hendrerit nulla.
          Vestibulum viverra tellus eget sodales lobortis. Vestibulum ut est
          consectetur, pulvinar neque et, ultrices mi. Proin et tincidunt nulla,
          egestas feugiat nisl. Maecenas id iaculis arcu, sit amet auctor nunc.
        </div>
        <div className="my-5">
          Donec at odio a tellus lacinia tempor non nec nibh. Nullam vehicula
          vitae sem at pharetra. Quisque a auctor turpis. Aenean cursus augue
          vel felis pharetra euismod. Aenean non elit in metus porttitor cursus.
          Ut in lectus sed urna mollis efficitur ac at sem. Donec facilisis
          lacinia magna, in sagittis mi consectetur nec. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Pellentesque eu velit malesuada, rutrum odio et, consequat
          elit. Maecenas quis felis varius, convallis odio et, tincidunt ex.
          Quisque aliquam nisl ac sapien vulputate tempus. Donec a lorem
          lobortis nulla dictum fringilla at vitae ipsum. Sed mi dui, auctor
          eget consectetur a, pellentesque sit amet felis. Curabitur vitae nulla
          vel massa ultrices fringilla.
        </div>
        <div className="my-5">
          Nullam consequat, est ut lacinia luctus, est nulla pulvinar purus, vel
          finibus tortor turpis vel enim. Sed id lectus lectus. Donec egestas
          ullamcorper quam. Etiam scelerisque in lacus ac feugiat. Nunc
          tristique eu lacus nec tincidunt. Curabitur tempor nulla quis aliquam
          feugiat. Nulla id ante quis dui tempus mollis at non turpis. Nunc ut
          facilisis elit. Phasellus sed nulla sed erat egestas cursus eu nec
          sem. Maecenas convallis luctus diam vitae molestie.
        </div>
      </div>
    </>
  );
}
