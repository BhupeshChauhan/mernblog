const Img = ({ url, caption }: any) => {
  return (
    <>
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-grey mt-4">
        <img src={url} className="z-20" />
      </div>
      {caption.length ? (
        <p className="w-full text-center m-auto my-3 md:mb-12 text-base text-darkGrey">
          {caption}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

const Quote = ({ quote, caption }: any) => {
  return (
    <div className="bg-darkGrey p-3 pl-5 border-l-4 border-darkGrey">
      <p className="text-xl leading-10 md:text-2xl">{quote}</p>
      {caption.length ? <p className="w-full text-base">{caption}</p> : ""}
    </div>
  );
};

const List = ({ style, items }: any) => {
  return (
    <ol>
      {items.map((item: any, index: any) => (
        <li
          key={index}
          className={`pl-5 ${style === "ordered" ? "list-decimal" : "list-disc"}`}
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ol>
  );
};
const BlockContent = ({ block }: any) => {
  const { type, data } = block;
  if (type === "paragraph") {
    return (
      <p className="text-sm" dangerouslySetInnerHTML={{ __html: data.text }} />
    );
  }
  if (type === "header") {
    if (data.level === 1) {
      return (
        <h1
          className="text-4xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      );
    }
    if (data.level === 2) {
      return (
        <h2
          className="text-3xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      );
    }
    if (data.level === 3) {
      return (
        <h3
          className="text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      );
    }
    if (data.level === 4) {
      return (
        <h4
          className="text-xl font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      );
    }
    if (data.level === 5) {
      return (
        <h5
          className="text-lg font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      );
    }
    if (data.level === 6) {
      return (
        <h6
          className="text-md font-bold"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      );
    }
  }
  if (type === "image") {
    return <Img url={data.file.url} caption={data.caption} />;
  }
  if (type === "image") {
    return <Quote quote={data.text} caption={data.caption} />;
  }
  if (type === "quote") {
    return <Quote quote={data.text} caption={data.caption} />;
  }
  if (type === "list") {
    console.log(data.items);
    return <List style={data.style} items={data.items} />;
  }
};

export default BlockContent;
