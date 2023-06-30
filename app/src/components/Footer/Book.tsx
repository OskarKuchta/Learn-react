interface BookTitle {
  title: string;
}
interface BookAuthor {
  author: string;
}
interface BookYear {
  year: number;
}
const Book: React.FC = () => {
  return (
    <div>
      <BookTitle title="Broken Glass" />
      <BookAuthor author="Alain Mabanckou" />
      <BookYear year={2005} />
    </div>
  );
};
const BookTitle: React.FC<BookTitle> = (props) => {
  return <h2>{props.title}</h2>;
};
const BookAuthor: React.FC<BookAuthor> = (props) => {
  return <h4>{props.author}</h4>;
};
const BookYear: React.FC<BookYear> = (props) => {
  return <p>{props.year} year</p>;
};

export default Book;
