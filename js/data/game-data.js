// игра
const GAME_DATA = {
  // вопросы
  questions: [
    {
      type: `single`,
      task: `Угадай, фото или рисунок?`,
      // варианты ответов
      options: [
        {
          imageUrl: `http://i.imgur.com/1KegWPz.jpg`,
          // ответы
          answers: [
            {
              correct: false,
              imageType: `paint`,
            },
            {
              correct: true,
              imageType: `photo`,
            }
          ],
        }
      ],
    },
    {
      type: `double`,
      task: `Угадайте для каждого изображения фото или рисунок?`,
      options: [
        {
          imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
          answers: [
            {
              correct: true,
              imageType: `paint`,
            },
            {
              correct: false,
              imageType: `photo`,
            }
          ]
        },
        {
          imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
          answers: [
            {
              correct: true,
              imageType: `paint`,
            },
            {
              correct: false,
              imageType: `photo`,
            }
          ],
        }
      ]
    },
    {
      type: `triple`,
      task: `Найдите рисунок среди изображений`,
      options: [
        {
          imageUrl: `https://k32.kn3.net/5C7060EC5.jpg`,
          answers: [
            {
              correct: true,
            },
          ],
        },
        {
          imageUrl: `https://i.imgur.com/DiHM5Zb.jpg`,
          answers: [
            {
              correct: false,
            },
          ],
        },
        {
          imageUrl: `http://i.imgur.com/DKR1HtB.jpg`,
          answers: [
            {
              correct: false,
            },
          ],
        },
      ]
    }
  ],
  stats: [],
};

export default GAME_DATA;
