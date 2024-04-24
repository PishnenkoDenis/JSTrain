//unknown -неизвестный тип. Используется:
//вместо any, результаты JSON.parse(), Ответы от неизвестных API, Ошибки в catch-блоках

//never - это юнион,  которого нет ни одного элемента.Значение, которое не может существовать.
//never можно использовать для имитации пустого элемента в union
type Union = string | number | never; //string | number

//Объектные типы
//object - представляет любой непримитивнфй тип
//Object - исп-ся для описания прототипа Object.prototype
//{} - представляет любое значение, отличное от null и undefined
//Record<string, unknown> - представлчет объект,который имеет строки как ключи- Лучший способ описания объекта,
//потому что он описывает именно объект, а не ф-ии, массивы и объекты.