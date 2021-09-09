import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Sala Lê',
    src: 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t15.5256-10/s280x280/241597987_441131287250166_978379746612274245_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=WY52BfJFDV8AX8NgFFi&_nc_ht=scontent.fsgn5-1.fna&oh=ff4da3cce6acb1f5274a6a4da4e4b138&oe=613E671C',
    profile:
      'https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-1/p200x200/231092216_2880466982183836_1097304192241716751_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=8FCE1SlF7m8AX-M5IT0&tn=VAK6G5omiRel5nNg&_nc_ht=scontent-xsp1-3.xx&oh=8c921802ec45544cc4754a0b3bf3bdcf&oe=615E4F65',
  },
  {
    name: 'Thu Loan',
    src: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/s280x280/239697871_1662261227312850_6722077467861534033_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=365331&_nc_ohc=0jPwrDxfiMUAX_Uznyd&_nc_ht=scontent.fsgn5-5.fna&oh=cba88ffa00af9ea1d4b0822b2c3813b7&oe=613EAEB7',
    profile:
      'https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/p200x200/241326496_1658355381036768_6192092816613782606_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=o2PZjrJrhGcAX-WOcRQ&_nc_ht=scontent-xsp1-2.xx&oh=86c7c51c0918eb30c30c3fda07d44b73&oe=613E274C',
  },
  {
    name: 'Trần Thanh Thảo My',
    src: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t51.36329-10/s280x280/241502503_4314193655334735_5282618605052440398_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=iWcan-SNT0cAX9Axx_M&_nc_ht=scontent-hkg4-2.xx&oh=e2da6260740a5826a20f08ab432a6841&oe=613D645A',
    profile:
      'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-1/p200x200/168505432_2810310332519151_5984461160010487408_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=R9hrJZzaY-EAX_BB6_I&_nc_ht=scontent.fsgn5-5.fna&oh=1773fc180fe652f87b935d9ff26d6be5&oe=615D2664',
  },
  {
    name: 'Chili Chili',
    src: 'https://scontent.fsgn5-7.fna.fbcdn.net/v/t15.5256-10/s280x280/240459424_366895478499810_7952212371744265713_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=YD5AJbUvc3EAX8HhSEj&_nc_ht=scontent.fsgn5-7.fna&oh=099cc3fcf3f930cd64ecba916a40f8e1&oe=613E9F0B',
    profile:
      'https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-1/p200x200/241288536_575681790285223_9018333361435885075_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BhQc7DNyOwcAX-Xf2WU&_nc_ht=scontent.fsgn5-1.fna&oh=4b31c9fa8510e39c746a7a7397460bc5&oe=613DCAC6',
  },
  {
    name: 'Nguyễn Đức',
    src: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/s280x280/241520623_1841506209343211_8684314502707723242_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=365331&_nc_ohc=SsitT6zsRGUAX9Vo5ES&_nc_ht=scontent.fsgn5-6.fna&oh=6f3bc3c84af91ba4fd26adcf492c25d6&oe=615D2EC5',
    profile:
      'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.18169-1/p200x200/27459786_835937873233388_594311655756237585_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=yZnB76jtsccAX_sIR_H&_nc_ht=scontent.fsgn5-7.fna&oh=80a21766a7a9fc439ed118a986ac5a2a&oe=615DB06E',
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
