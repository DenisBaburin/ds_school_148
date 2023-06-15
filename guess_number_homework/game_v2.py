"""Игра угадай число
Компьютер сам загадывает и сам угадывает число
"""

import numpy as np


def game_core_v3(number: int = 1) -> int:    
    """Функция принимает на входе угадываемое число и возвращает число попыток 
    угадывания. 
    
    Искомое число находится путем реализации алгоритма бинарного поиска: задаем
    максимальное и минимальное значения (в нашем случае это 1 и 100), и пока 
    минимальное значение меньше максимального, реализуем цикл: сумму минимального
    и максимального числа делим на два и сравниваем результат с искомым числом. 
    
    Если угадали с первого раза - количество попыток равно 1. Если нет, то в 
    зависимости от того, больше искомое число или меньше, чем среднее от суммы
    максимально и минимального числа, приравниваем среднее к минимуму (если искомое
    число больше) или максимуму (если искомомое число больше), и ищем новое среднее
    до тех пор, пока не найдем искомое число.
    
    Args:
        number (int, optional): Загаданное число. Defaults to 1.

    Returns:
        int: Количество попыток.
    """

    # задаем счетчик попыток и изначальные границы поиска
    count = 0
    min_value = 1
    max_value = 100
    
    while min_value <= max_value:
        count += 1
        predict = (min_value + max_value)//2 # здесь рассчитываем значение искомого числа
        
        if number == predict:
          return count
        if number > predict:
            min_value = predict + 1
        elif number < predict:
            max_value = predict - 1   
             
    return count


def score_game(random_predict) -> int:
    """За какое количство попыток в среднем за 1000 подходов угадывает наш алгоритм

    Args:
        random_predict ([type]): функция угадывания

    Returns:
        int: среднее количество попыток
    """
    count_ls = []
    np.random.seed(1)  # фиксируем сид для воспроизводимости
    random_array = np.random.randint(1, 101, size=(1000))  # загадали список чисел

    for number in random_array:
        count_ls.append(random_predict(number))

    score = int(np.mean(count_ls))
    print(f"Ваш алгоритм угадывает число в среднем за:{score} попыток")
    return score



if __name__ == "__main__":
    # RUN
    score_game(game_core_v3)
