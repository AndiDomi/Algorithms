class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        x_str = str(x)
        if x_str[::-1] == x_str:
            return True
        return False