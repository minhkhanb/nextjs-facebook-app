import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
  {
    name: 'Sala Lê',
    src: 'https://scontent.fsgn5-1.fna.fbcdn.net/v/t15.5256-10/s280x280/241597987_441131287250166_978379746612274245_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=WY52BfJFDV8AX8NgFFi&_nc_ht=scontent.fsgn5-1.fna&oh=ff4da3cce6acb1f5274a6a4da4e4b138&oe=613E671C',
  },
  {
    name: 'Thu Loan',
    src: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/s280x280/239697871_1662261227312850_6722077467861534033_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=365331&_nc_ohc=0jPwrDxfiMUAX_Uznyd&_nc_ht=scontent.fsgn5-5.fna&oh=cba88ffa00af9ea1d4b0822b2c3813b7&oe=613EAEB7',
  },
  {
    name: 'Trần Thanh Thảo My',
    src: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t51.36329-10/s280x280/241502503_4314193655334735_5282618605052440398_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=iWcan-SNT0cAX9Axx_M&_nc_ht=scontent-hkg4-2.xx&oh=e2da6260740a5826a20f08ab432a6841&oe=613D645A',
  },
  {
    name: 'Chili Chili',
    src: 'https://scontent.fsgn5-7.fna.fbcdn.net/v/t15.5256-10/s280x280/240459424_366895478499810_7952212371744265713_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=YD5AJbUvc3EAX8HhSEj&_nc_ht=scontent.fsgn5-7.fna&oh=099cc3fcf3f930cd64ecba916a40f8e1&oe=613E9F0B',
  },
  {
    name: 'Nguyễn Đức',
    src: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/s280x280/241520623_1841506209343211_8684314502707723242_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=365331&_nc_ohc=SsitT6zsRGUAX9Vo5ES&_nc_ht=scontent.fsgn5-6.fna&oh=6f3bc3c84af91ba4fd26adcf492c25d6&oe=615D2EC5',
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
