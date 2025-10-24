export default function Section({
  SecImage,
  Title = "タイトル",
  Textbox = "説明文が表示されます",
  ImgAlt = "写真",
}) {
  return (
    <>
      <div className="section_wrap">
        <section>
          <div
            style={{
              flexBasis: "30%",
            }}
          >
            <img
              style={{ borderRadius: "50%", overflow: "hidden" }}
              src={SecImage}
              alt={ImgAlt}
            ></img>
          </div>
          <div
            style={{
              flexBasis: "70%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <h2
              style={{ fontStyle: "italic", letterSpacing: 1, fontWeight: 600 }}
            >
              {Title}
            </h2>
            <p style={{ letterSpacing: 1 }}>{Textbox}</p>
          </div>
        </section>
      </div>
    </>
  );
}
