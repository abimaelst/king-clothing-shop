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
    <div className="min-w-[30%] h-60 flex flex-1 items-end justify-start border border-black overflow-hidden group hover:cursor-pointer relative">
      <div className="bg-black w-full h-full absolute bg-opacity-40 transition-all z-30 group-hover:bg-opacity-5"></div>
      <div
        className="w-full h-full bg-cover bg-center transition ease-in-out duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="h-24 py-3 px-6 flex flex-col items-start justify-between absolute z-40">
        <h2 className="text-lg font-medium text-white capitalize">{title}</h2>
        <button className="p-2 rounded-lg font-medium bg-white text-sm">
          Shop now
        </button>
      </div>
    </div>
  );
};
