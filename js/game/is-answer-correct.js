export const isAnswerCorrect = (candidateOptions, optionsToCompareWith) => {
  // ответ правильный если он содержит все правильные варианты из эталонного набора
  const correctOptions = optionsToCompareWith.filter((option) => option.correct);
  return correctOptions.reduce((isCorrect, correctOption) => {
    const hasCorrectOption = candidateOptions.some((candidateOption) => {
      return candidateOption.imageUrl === correctOption.imageUrl && candidateOption.imageType === correctOption.imageType;
    });
    return isCorrect && hasCorrectOption;
  }, true);
};
