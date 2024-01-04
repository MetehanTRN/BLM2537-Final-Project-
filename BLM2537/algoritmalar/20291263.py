def min_step(n):
    return n + (n-1)

def main():
    n = int(input())
    k = min_step(n)
    print(f"{k}")

if __name__ == "__main__":
    main()