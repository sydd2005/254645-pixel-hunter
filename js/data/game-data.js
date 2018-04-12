export const QUESTION_TYPE = {
  'SINGLE': 1,
  'DOUBLE': 2,
  'TRIPLE': 3,
};

export const IMAGE_TYPE = {
  'PHOTO': `photo`,
  'PAINT': `paint`,
};

// игра
const GAME_DATA = {
  // вопросы
  questions: [
    {
      type: QUESTION_TYPE.SINGLE,
      task: `Угадай, фото или рисунок?`,
      imageUrls: [
        `http://i.imgur.com/1KegWPz.jpg`
      ],
      // варианты ответов
      options: [
        {
          imageUrl: `http://i.imgur.com/1KegWPz.jpg`,
          imageType: IMAGE_TYPE.PHOTO,
          correct: true,
        },
        {
          imageUrl: `http://i.imgur.com/1KegWPz.jpg`,
          imageType: IMAGE_TYPE.PAINT,
          correct: false,
        }
      ],
    },
    {
      type: QUESTION_TYPE.DOUBLE,
      task: `Угадайте для каждого изображения фото или рисунок?`,
      imageUrls: [
        `https://k42.kn3.net/CF42609C8.jpg`,
        `https://k42.kn3.net/D2F0370D6.jpg`
      ],
      options: [
        {
          imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
          imageType: IMAGE_TYPE.PHOTO,
          correct: false,
        },
        {
          imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
          imageType: IMAGE_TYPE.PAINT,
          correct: true,
        },
        {
          imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
          imageType: IMAGE_TYPE.PHOTO,
          correct: false,
        },
        {
          imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
          imageType: IMAGE_TYPE.PAINT,
          correct: true,
        }
      ]
    },
    {
      type: QUESTION_TYPE.TRIPLE,
      task: `Найдите рисунок среди изображений`,
      imageUrls: [
        `https://k32.kn3.net/5C7060EC5.jpg`,
        `https://i.imgur.com/DiHM5Zb.jpg`,
        `http://i.imgur.com/DKR1HtB.jpg`
      ],
      options: [
        {
          imageUrl: `https://k32.kn3.net/5C7060EC5.jpg`,
          imageType: IMAGE_TYPE.PAINT,
          correct: true,
        },
        {
          imageUrl: `https://i.imgur.com/DiHM5Zb.jpg`,
          imageType: IMAGE_TYPE.PHOTO,
          correct: false,
        },
        {
          imageUrl: `http://i.imgur.com/DKR1HtB.jpg`,
          imageType: IMAGE_TYPE.PHOTO,
          correct: false,
        },
      ]
    }
  ],
  stats: [],
};

export default GAME_DATA;
