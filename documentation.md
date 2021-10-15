Библиотека React это ядро, которое работает (отображает контект) в браузере с помощью
библиотеки React-DOM, а в мобильных приложениях на ANDROID и IOS работает
(отображает контент) с помощью библиотеки React-Native.

Virtual-DOM - легкая форма обычного DOM дерева в контексте браузера, при внесении
изменений в DOM-дерево, они не переносятся в DOM-дерево сразу, вместо этого
создается новое DOM-дерево с новыми значениями и она сравнивается с предыдущим
(эта стадия сравнения называется СОГЛАСОВАНИЕ(RECONCILIATION)). После того как
как была найдена разница между 2 деревьями, происходит фаза визуализации
(ОТРИСОВКА(RENDER)), т.е мы видим обновленные данные на странице. Для каждого
изменения React устанавливает свою приоритетность, более приоритетные изменения
вносятся раньше, менее позже.   

---Создание проекта---
1) Создание приложения: npx create-react-app "название приложения";
2) Запуск приложения: npm start;
3) Структура проекта: В папке public, лежит index.html, все остальные файлы
можно сразу удалять. В папке src, находится исходный код нашего приложения,
все файлы кроме index.js и App.js, можно удалять.
--.--

---Состояние компонента---
1) Импортируем функцию useState: import React, {useState} from 'react';
2) Объявляем состояние компонента: const [counter, setCounter] = useState(5),
где counter - состояние компонента (просто значение), setCounter - изменение
состояния компонента (функция), в () - значение компонента по умолчанию;
3) Прописываем функции изменения состояния компонента, они вызывают из себя
функцию setCounter() (что то типа замыкания) с какими либо зачениями;
4) Прописываем обработчики событий в тегах, для смены состояния компонента;
5) Компоненты бывают управляемые и неуправляемые:
  1* Управляемые компоненты - сами управляют своим состоянием и обновляют его
  когда пользователь вводит данные (например <input /> <textarea />), изменить
  состояние можно с помощью хука useState().
  2* Неуправляемые компоненты - они хранят данные формы прямо в DOM, изменить
  состояние можно с помощью хука useRef().
--.--

---Функциональный компонент---
В функциональных компонентах, состоянием компонента можно управлять с помощью
хуков ({useState} и т.д.). Алгоритм описан выше. В последнее время, в основном
приоритет отдается функциональным компонентам.
--.--

---Классовый компонент---
В классовых компонентах, состоянием компонента управляет constructor класса.
В последнее время, компоненты в классовом стиле, используют все реже, и отдают
предпочтение функциональным и использованию хуков.
--.--

---Хуки---
Хуки - это некоторые функции, которые предоставляет React, эти функции всегда
начинаются со слова use, при этом хуки можно использовать либо в функциональных
компонентах, либо в собственных хуках, т.е. мы можем на основании основных
хуков, делать свои собственные хуки, с различным функционалом. Хуки можно
использовать только на верхнем уровне вложенности. Основных React хуков 7:
useState();
useEffect();
useRef();
useMemo();
useCallback();
useContext();
useReducer();
Подробное описание хуков:
1) useState() - хук состояния компонента, с помощью него мы создаем состояние у
управляемого компонента и меняем его.
Пример: const [title, setTitle] = useState('shocv');
2) useRef() - с помощью этого хука, мы можем получить доступ с DOM - элементу,
и уже у этого DOM - элемента забрать value. Использется для управление
состоянием неуправляемого компонента.
Пример: const bodyInputRef = useRef();
3) useMemo(callback, deps) - этот хук производит вычисления, запоминает
результат этого вычисления и кэширует (такое поведение называется мемоизация),
и на каждую перерисовку компонента, она не пересчитывает заново, она достает
пересчитанные данные из кэша, и использует их. Но если какая то из зависимостей
изменилась, то хук вновь пересчитывает и кэширует результат выполнения до тех
пор, пока опять одна из зависимостей не изменится. Первым параметром этот хук
принимает callback - функцию обратного вызова, а вторым массив зависимости.
Пример:
const sortedAndSearchedPosts = useMemo(() => {
  return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
}, [searchQuery, sortedPosts])
4) Кастомные хуки - это хуки, которые мы создаем самостоятельно, внутри себя они
используют стандартные React хуки. Чтобы создать кастомный хук, нужно создать
отдельный .js файл с названием use... в отдельной папке hooks, и в нем прописать
код хука, и затем использовать его в другом файле, сперва прописав путь к хуку
(пример: import {usePosts} from "./hooks/usePosts"), а затем использовать сам
хук (пример: const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query))
5) useEffect(callback, deps) - хук для управления стадиями жизненного цикла
компонента, его можно использовать столько раз сколько нам необходимо. Например
один хук следит за одними данными, другой за другими, третий хук отрабатывает
только при первичной отрисовке, и т.д.
Работает useEffect(callback, deps) следующим образом, первым параметром он
принимает callback - функцию а вторым массив зависимостей (так же как
useMemo(callback, deps)). Следить за всеми жизненными циклами компонента можно
следующим образом:
  1*Монтирование (mount)
  Когда массив зависимостей пустой, callback - функция
  отработает только 1 раз, когда компонент был вмонтирован, таким образом мы
  можем отследить эту стадию вмонтирования и выполнить нужные для нас действия.
  2*Обновление (update)
  Для того чтобы следить за изменениями (т.е за стадией обновления), нужно внести
  какие то зависимости в массив зависимостей, каждый раз когда в списке
  зависимостейбудут происходить изменения, будет отрабатыватся callback - функция
  которую мы передали в хук useEffect(callback, deps).
  3*Размонтирование (unmount)
  За стадией размонтирования компонента, можно следить если callback возвращает
  какую то функцию (return), то эта функция будет вызвана как раз в момент
  демонтирования компонента. В этот момент необходимо делать различные очистки,
  очищать глобальное хранилище, отписыватся от каких то событий и т.д.
Пример:      
useEffect(() => {
  fetchPosts()
}, [])
5) useContext() - хук для создания глобального хранилища, чтобы из любого
компонента к этому глобальному хранилищу обращаться, при этом избегая передачи
по иерархии от родителя к ребенку.
--.--

---Props - аргументы компонента---
1) Props - некоторые входные данные (объект), которые может принимать компонент,
для более гибкой настройки компонента.
2) Key - когда мы создаем списки с помощью Props, обязательным условием является
указание ключа (key), значение этого ключа должно быть уникальным (как правило
это id элемента списка). Ключи позволяют React делать рендеринг и перерисовывать
не весь список, а только те элементы, в которых произошли изменения.
3) Props.children - React не знает, в какое место компонента нужно добавлять
вложенные элементы, для этого используется Props.children. Например, мы сделали
UI - компонент кнопки, и мы используем эту кнопку несколько раз в проекте,
значит текст внутри кнопки, при каждом использовании, у нас будет разным, чтобы
сказать React в каком месте кнпки можно вставить текст используем Props.children.
Пример кода: <button>{props.children}</button>.
--.--

---React Transition Group---
React Transition Group - это библиотека React, для создания анимации. С помощью
нее можно анимировать переходы входы и выходы, отслеживать фазы анимации
(т.е когда анимация активна, когда анимация закончилась). Инструкция по
использованию находится на сайте документации.
Команда для установки: npm install react-transition-group --save
---.---

---Библиотека для работы с сервером. Axios---
Axios - это библиотека для работы с сервером (что то вроде fetch).
Команда для установки:npm install axios
---.---

---Жизненный цикл компонента---
Каждый компонент обладает своим жизненным циклом и он проходит в 3 этапа:
  1)Монтирование (mount) - создается компонент и монтируется в DOM дерево.
  2)Обновление (update) - например мы изменили состояние, произошел перерендер
  (перерисовка) компонента, и эта стадия называется обновление. Т.е это стадия
  активной жизни компонента, когда он работает, когда мы его видим, когда он живет.
  3)Размонтирование (unmount) - стадия, когда компонент не нужен и по какой то
  причине мы его удаляем. Например мы хотим его скрыть, или переходим на другую
  страницу и за ненадобностью React его уничтожает.
Для управления стадиями жизненного цикла компонента используется хук useEffect().  
---.---

---React router---
React router - библиотека для управления роутингом в браузере. Использовать
следующим образом:
  1) Устанавливаем. Команда для установки: npm install react-router-dom
  2) Прописываем ссылку к компоненту роутинга:
  import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
  3) Оборачиваем весь компонет приложения, где хотим реализовать роутинг в компонент
  <BrowserRouter>App</BrowserRouter>.
  4) Для того чтобы объявить какой то маршрут, (какую то страницу в нашем
  приложении, на которую мы переходим), React-router предоставляет компонент,
  который называется Route. В него мы помещаем компонент который хотим отрисовать,
  а в path="/link" указываем ссылку по которой открывается компонент. Пример:
  <Route path="/posts"><Posts /></Route>. Однако в данном случае, нам нужно
  будет постоянно менять ссылку вручную, для того чтобы динамически передвигаться
  по приложению можно положить ссылки в тег <a href="/posts"></a>, тогда при
  нажатии на ссылку, страница откроет нам нужный компонент там, где нам нужно.
  5) Для того, чтобы переход между страницами осуществлялся без перезагрузки
  приложения (SPA), React-router предоставляет компонент, который называется Link,
  его нужно использовать вместо тега <a href="/posts"></a>, следующим образом
  <Link to="/posts">Посты</Link>.
  6) Обработка несуществующих ссылок. На случай, если пользователь перейдет по
  несуществующей ссылке, React-router предоставляет компоненты Switch и Redirect.
  В Switch мы оборачиваем все возможные ссылки в нашем приложении. В Redirect
  указываем какую страницу открывать если ссылки не существует, Redirect также
  оборачивается в Switch.
  Пример:
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/posts">
      <Posts />
    </Route>
    <Route path="/error">
      <Error />
    </Route>
    <Redirect  to="/error"/>
  </Switch>
  7) Ссылка по умолчанию. Если в Route указать в качестве ссылки "/", то это
  будет страница по умолчанию (страница которая будет активна если никаких
  других ссылок не указывать, и будет открываться при запуске и перезагрузке
  приложения).
Динамическая навигация - роутинг по определенным постам товарам и т.д. по id
или другим параметрам.  
useHistory() - хук, предоставляемый библиотекой React router, для того, чтобы
мы могли делать роутинг к странице определенного поста или товара и т.д по id
(динамическая навигация).
Использовать следующим образом:    
  1) Импортируем хук: import {useHistory} from 'react-router-dom';
  2) Записываем хук в переменную: const router = useHistory();
  3) Затем с помощью команды .push() указываем ссылку для перехода по id,
  пример:
  <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
      Открыть
  </MyButton>
  4) Создаем отдельную страницу с информацией (описанием) поста на который
  мы перешли, и добавляем ссылку в Switch. Важно, перед id нужно ставить : для
  того чтобы маршрут был динамическим, а также если начало ссылки похоже на
  другую ссылку, то нужно указать пропс exact, чтобы React router воспринимал
  их как разные. Например:
  <Route exact path="/posts">
    <Posts />
  </Route>
  <Route exact path="/posts/:id">
    <PostIdPage />
  </Route>
  5) useParams() - данный хук нужен для того, чтобы вытащить какой либо
  параметр из URL(API), например описание определенного поста по id и т.д.
  Использовать следующим образом:
    1* Импортируем хук: import {useParams} from 'react-router-dom';
    2* Записываем хук в переменную: const params = useParams();
---.---