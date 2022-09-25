import { useState } from 'react';
import reactLogo from './assets/react.svg';
import checkMark from './assets/check_mark.svg';
import './App.css';

function App() {
  const [numClicked, setNumClicked] = useState(0);
  const getClickedData = (isClicked) => {
    if (isClicked) setNumClicked(numClicked + 1);
    else setNumClicked(numClicked - 1);
  };

  return (
    <div className="App">
      <h1>💻맥북 램추가 계산기</h1>
      <h2>함께 사용하는 앱 모두 선택</h2>
      <p>테스트 사이트입니다. 결과 데이터를 구매에 참고하지 마세요.</p>
      <div className="container">
        {apps.map(({ name, imgUrl }, index) => (
          <Card
            name={name}
            imgUrl={imgUrl}
            getClickedData={getClickedData}
            key={index}
          />
        ))}
      </div>
      <footer>
        <p>
          {numClicked} apps, <b>{8 * (1 + Math.floor(numClicked / 5))}GB</b> is
          required.
        </p>
      </footer>
    </div>
  );
}

function Card({ name, imgUrl, getClickedData }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="card">
      <div
        className="img-box"
        onClick={() => {
          getClickedData(!clicked);
          setClicked(!clicked);
        }}
      >
        <img
          className="logo"
          src={imgUrl}
          style={clicked ? { opacity: 0.6 } : null}
        />
        {clicked ? <img className="check-mark" src={checkMark} /> : null}
      </div>
      <p>{name}</p>
    </div>
  );
}

const apps = [
  {
    name: 'Safari',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/351px-Safari_browser_logo.svg.png',
  },
  {
    name: 'Chrome',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/768px-Google_Chrome_icon_%28February_2022%29.svg.png',
  },
  {
    name: 'Notion',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?20200221181224',
  },
  {
    name: 'Figma',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/800px-Figma-logo.svg.png?20190122211436',
  },
  {
    name: 'Xcode',
    imgUrl:
      'https://w.namu.la/s/1da791fc7125ef2d3bd4ae46bdef8586ee3d0e5b8b296a382bfea693fde2e025fa44c5fc1168ddc872d39c826a10b0430f1fe53bda852b5873de58c03f228939841f55c5ab011b2aa4182dd6f83624ba78ff27523d09a9e46b4d9b5080977512',
  },
  {
    name: 'VS Code',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png',
  },
  {
    name: 'iTerm',
    imgUrl:
      'https://cdn.icon-icons.com/icons2/2667/PNG/512/iterm_terminal_icon_161274.png',
  },
  {
    name: 'Exel',
    imgUrl:
      'https://w.namu.la/s/2f85bd610e31eb995360152e8def12d7b17497dede2db7c7b9ac558b643313fd857987c28d4a597cb6893df7a775c99f114f717defb37f4b6ed07c640ba821627d5226420fdf49deb40b2a6af21e05cbddf8d51deee302d8ae143581aa08be55',
  },
  {
    name: 'PowerPoint',
    imgUrl:
      'https://w.namu.la/s/c531af3b2f3d1052200027ef0068837a0b56a7e1238aabe8b6088e4d01b1102d431895f5b96a562b734ee3dd03f1e8eb7fb8ce7343541c47038f8486db1ad405a80548118fcb984b7e6cc9c7d572b3af2fb83855abcd676569e798c621cc7906',
  },
  {
    name: 'Word',
    imgUrl:
      'https://w.namu.la/s/dbcd1fb4a7a74561fde19b9bb4a963ed082b6eec83d39bfd0a1685f7522d95a0136bc9b18d3b39d3acd6b1773cb40dc0c2f9fa166528758f51fb3b51abdb23d1ed0ea5b747f10d68970f2448c9207cb42dddfc19d0e3ff1d96cf8986a3fdca28',
  },
  {
    name: 'Slack',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/254px-Slack_icon_2019.svg.png?20200128081203',
  },
  {
    name: 'Kakao Talk',
    imgUrl:
      'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/5f9c58c2017800001.png',
  },
  {
    name: 'Discord',
    imgUrl:
      'https://w.namu.la/s/ab0b5f8f79c22ba3750c7fca82c56b32dbb099532a06790df90c17494544797abbf4b9fa2ec1979c58dcf246e7bb6e27f5c0560d15be9c351eb97408dfbb1557cffdb8ccc7b5c076f864f9bc24ba4b780bd479e86f4833292d41bbfacbaaedc8',
  },
  {
    name: 'Zoom',
    imgUrl:
      'https://play-lh.googleusercontent.com/V1lb4J811SNh6hlGqNlDnGZXfdtI2i-1dC7_i9TnViyiboZ2RHp8xbhKbbECG-f26is=w480-h960-rw',
  },
  {
    name: 'Apple Music',
    imgUrl:
      'https://w.namu.la/s/91e7e72b4e3249c9ed9edd168e43d03debccacaad2ba74ede15ec53744324913905a3a0bcceda481925416e42443ab6470e87a88999f76089f874ba7d934519410273cf39a1b2f5f3128ff100ef9a721f36530650c06826e1335c5e48ab3c4b1',
  },
  {
    name: 'Other App',
    imgUrl: reactLogo,
  },
  {
    name: 'Other App',
    imgUrl: reactLogo,
  },
  {
    name: 'Other App',
    imgUrl: reactLogo,
  },
  {
    name: 'Other App',
    imgUrl: reactLogo,
  },
  {
    name: 'Other App',
    imgUrl: reactLogo,
  },
];

export default App;
