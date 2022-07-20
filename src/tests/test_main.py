from main import get_team_name


def test_name():
    """Check if team name is correct"""
    assert get_team_name() == "Manticores"
