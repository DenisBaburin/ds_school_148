""""Игра Угадай число"""

import numpy as np

number = np.random.randint(1, 101) # загадываем число
count = 0

while True:
    count += 1
    predict_number = int(input("Угадай число от 1 до 100: "))
    
    if predict_number > number:
        print("Число должно быть меньшь!")
    elif predict_number < number:
        print("Число должно быть больше!")
    else:
        print(f"Вы угадали число! Это число {number}, вы угадали его за {count} попыток!")
        break # конец игры
print(55)
