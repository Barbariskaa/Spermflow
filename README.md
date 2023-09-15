# Spermflow

Регаемся на voiceflow. Идем сюда https://creator.voiceflow.com/dashboard

Создаем ассистента в месте указанном на фото.
![](https://i.imgur.com/XFYTHI3.png)
![](https://i.imgur.com/qw5I1at.png)
![](https://i.imgur.com/B8r6cOs.png)
![](https://i.imgur.com/1pRLqwG.png)

Нажимаем Create Assistant.

Создастся схема как на пике:
![](https://i.imgur.com/TH6C1hc.png)

Редактируем cхему вот так:
![](https://i.imgur.com/YX2y69N.png)

	Блок с молнией перемещаем рядом с блоком с волной.
	Раздел AI response удаляем.
	Самый большой раздел Welcome удаляем тоже.
	Соединяем оставшийся раздел Welcome с точкой на зеленой кнопке старт.
	Открываем блок с молнией кликом.
	В меню справа, в prompt стираем все и прописываем только {last_utterance}
	System удаляем.
	В Prompt Settings настраиваем слайдеры и выбираем нужную модель.
Затем нужно взять АПИ ключ, для этого кликаем по integrations.
![](https://i.imgur.com/U7waCUf.png)


Заходим во вкладку Dialog API, там Копируем значение из Primary key и вставляем в скрипте в переменную apiKey, между кавычек.
Запускаем ассистента через кнопку старта, жмем Run Start. Все. По идее больше запускать не надо, должно работать и так. Без запуска будешь ловить 404, как тут:
`{"code":404,"status":"Not Found","dateTime":"2023-06-19T17:15:41.992Z","timestamp":1687194941992,"data":"Model not found. Ensure project is properly rendered."}`


Готово. Запускаем и пользуемся скриптом. Стриминга нет, слайдеры в скрипте не работают.
