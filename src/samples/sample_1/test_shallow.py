from .func import get_all_words_with_letter_from_list_as_uppercased


def test_it():
    """Test function get_all_words_with_letter_from_list_as_uppercased"""
    result = get_all_words_with_letter_from_list_as_uppercased("a", "A, B, C, car, eucaliptus")

    assert result == ["A", "CAR", "EUCALIPTUS"]
