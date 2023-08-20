import { CategoryItemComponent } from '@/components/CategoryItem/CategoryItemComponent';

interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

interface DirectoryComponentProps {
  categories: Category[];
}

export const DirectoryComponent = ({ categories }: DirectoryComponentProps) => {
  return (
    <section className="w-full flex flex-wrap justify-between gap-4">
      {categories.map((category) => (
        <CategoryItemComponent key={category.id} category={category} />
      ))}
    </section>
  );
};
