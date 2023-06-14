"""Игра Угадай число. 
Компьютер сам загадывает и угадывает число"""

import numpy as np

def random_predict(number:int=1) -> int:
    """Рандомно угадывает число

    Args:
        number (int, optional): Загаданное число. Defaults to 1.

    Returns:
        int: Количество попыток
    """
    count = 0
    
    while True:
        count += 1
        predict_number = np.random.randint(1, 101) # предполагаемое число
        if number == predict_number:
            break # выход из цикла, если угадали
    return (count)

#print(f"Колисчество попыток: {random_predict(15)}")    

def score_game(random_predict) -> int:
    """За какое количество попыток в среднем из 1000 подходов угадывает наш алгоритм 

    Args:
        random_predict (_type_): функция угадываения

    Returns:
        int: среднее количество попыток
    """
    count_ls = [] # список для сохранения количества попыток
    np.random.seed(1)
    random_array = np.random.randint(1, 100, size=(1000)) # загадали списко чисел
    
    # print(random_array)
    
    for number in random_array:
        count_ls.append(random_predict(number))
    
    score = int(np.mean(count_ls))
    
    print(f"Ваш алгоритм в среднем угадывает число за {score} попыток")
    return (score)

if __name__=='__main__':
    score_game(random_predict)