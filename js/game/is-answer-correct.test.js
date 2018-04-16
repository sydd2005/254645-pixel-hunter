import {assert} from 'chai';
import {isAnswerCorrect} from './is-answer-correct';

describe(`Answer checking`, () => {
  it(`should return true if canditate set contains all correct options from reference set`, () => {
    const correctOptions1 = [
      {
        imageUrl: `http://i.imgur.com/1KegWPz.jpg`,
        imageType: `photo`,
        correct: true,
      },
      {
        imageUrl: `http://i.imgur.com/1KegWPz.jpg`,
        imageType: `paint`,
        correct: false,
      }
    ];
    const canditateOptions1 = [
      {
        imageUrl: `http://i.imgur.com/1KegWPz.jpg`,
        imageType: `photo`,
      }
    ];

    const correctOptions2 = [
      {
        imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
        imageType: `photo`,
        correct: false,
      },
      {
        imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
        imageType: `paint`,
        correct: true,
      },
      {
        imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageType: `photo`,
        correct: false,
      },
      {
        imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageType: `paint`,
        correct: true,
      }
    ];

    const canditateOptions2 = [
      {
        imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
        imageType: `paint`,
        correct: true,
      },
      {
        imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageType: `paint`,
        correct: true,
      }
    ];
    assert.ok(isAnswerCorrect(canditateOptions1, correctOptions1));
    assert.ok(isAnswerCorrect(canditateOptions2, correctOptions2));
  });

  it(`should return false if candidate set contains none of the correct options`, () => {
    const correctOptions3 = [
      {
        imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
        imageType: `photo`,
        correct: false,
      },
      {
        imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
        imageType: `paint`,
        correct: true,
      },
      {
        imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageType: `photo`,
        correct: false,
      },
      {
        imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageType: `paint`,
        correct: true,
      }
    ];
    const canditateOptions3 = [
      {
        imageUrl: `https://i.imgur.com/DiHM5Zb.jpg`,
        imageType: `photo`,
        correct: true,
      }
    ];
    assert.notOk(isAnswerCorrect(canditateOptions3, correctOptions3));
  });

  it(`should return false if candidate set contains not all correct options`, () => {
    const correctOptions4 = [
      {
        imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
        imageType: `photo`,
        correct: false,
      },
      {
        imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
        imageType: `paint`,
        correct: true,
      },
      {
        imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageType: `photo`,
        correct: false,
      },
      {
        imageUrl: `https://k42.kn3.net/D2F0370D6.jpg`,
        imageType: `paint`,
        correct: true,
      }
    ];
    const canditateOptions4 = [
      {
        imageUrl: `https://k42.kn3.net/CF42609C8.jpg`,
        imageType: `paint`,
        correct: true,
      }
    ];
    assert.notOk(isAnswerCorrect(canditateOptions4, correctOptions4));
  });
});
