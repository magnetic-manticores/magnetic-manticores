def get_all_words_with_letter_from_list_as_uppercased(letter: str, words: str) -> list:
    """Function returning all words from list with given letter as uppercased"""
    new_words = []

    for word in [w.strip() for w in words.split(",")]:
        if letter.lower() in word.lower():
            new_words.append(word.upper())
    return new_words
