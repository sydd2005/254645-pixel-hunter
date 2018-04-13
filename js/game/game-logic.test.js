import {assert} from 'chai';
import {isAnswerCorrect} from './game-logic';

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
    assert.ok(isAnswerCorrect(canditateOptions1, correctOptions1));
  });
});
