interface CategoryItemComponentProps {
  category: {
    id: number;
    title: string;
    imageUrl: string;
  };
}

export const CategoryItemComponent = ({
  category,
}: CategoryItemComponentProps) => {
  const { imageUrl, title } = category;

  return (
    <div className="min-w-[30%] h-60 flex flex-1 items-center justify-center border border-black overflow-hidden group hover:cursor-pointer">
      <div
        className="w-full h-full bg-cover bg-center transition ease-in-out duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="h-24 py-3 px-6 flex flex-col items-center justify-between border border-black bg-white bg-opacity-50 transition-all group-hover:bg-opacity-100 absolute">
        <h2 className="font-bold mx-1.5 text-2xl">{title}</h2>
        <p className="text-base font-light">Shop Now</p>
      </div>
    </div>
  );
};
