import Firstview from "./Firstview";
import Section from "./Section";
import Dolphine from "./../assets/Dolphin.jpeg";
import Polar_bear from "./../assets/polar_bear.jpg";
import Penguin from "./../assets/penguin.jpg";

export default function MainWrap() {
  return (
    <>
      <main>
        <Firstview>
          <h1
            style={{
              position: "absolute",
              color: "white",
              zIndex: 5,
              top: "50%",
              left: "50%",
              transform: "translateY(-50%) translateX(-50%)",
              fontStyle: "italic",
              fontWeight: "light",
              letterSpacing: 7,
              fontSize: "2rem",
            }}
          >
            Learning React
          </h1>
        </Firstview>

        <Section
          SecImage={Dolphine}
          ImgAlt="イルカの写真"
          Title="What's React?"
          Textbox="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダ"
        />

        <Section
          SecImage={Polar_bear}
          ImgAlt="しろくまの写真"
          Title="How to use"
          Textbox="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダ"
        />

        <Section
          SecImage={Penguin}
          ImgAlt="ペンギンの写真"
          Title="I am a Penguin."
          Textbox="私はペンギンです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダ"
        />
      </main>
    </>
  );
}
