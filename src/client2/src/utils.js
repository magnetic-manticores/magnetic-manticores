import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

const customConfig = {
  dictionaries: [adjectives, colors],
  separator: '-',
  length: 2,
};

const randomName = uniqueNamesGenerator({
  dictionaries: [adjectives, colors, animals]
}); // big_red_donkey

export const getRandomName = () => uniqueNamesGenerator(customConfig)
