#!/usr/bin/env python3
"""
Definition of index_range helper function
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Will take 2 integer arguments and return a tuple of size two
    containing the start and the end index corresponding to the range of
    indexes to return a list for those pagination parameters
    Args:
        page (int): page number to return
        page_size (int): number of items per page
    Return:
        tuple(start_index, end_index)
    """
    start, end = 0, 0
    for i in range(page):
        start = end
        end += page_size

    return (start, end)
