# digest

1) Правило огонька: если карточка есть на главной, то первая ее новость – топ (вставляется иконка огонька).
<span class="icon"><img src="./img/icons/fire.png" alt="" /></span>
Если новость только одна – огонек не ставится.



2) Если в статье нет картинки - к классу article добавляем еще один класс с модификатором - article_no-image

3) В хедере статей всегда есть оба лейбла - t2 и РТК.
          <div class="article-header__badges badges">
            <div class="badges__item badges__item_rtk">РТК</div>
            <div class="badges__item badges__item_t2 lowercase">t2</div>
          </div>
Чтобы отобразить только один, например, РТК - к классу article добавляем еще один класс с нужным модификатором - article_rtk
По умолчанию отображаются оба лейбла

4) Если новости идут в списке, то используем тег
<div class="article-content__text article-text">
    <ul class="article-text__list article-list">
        <li>....</li>
    </ul>
 </div>
Если новость одна -
<div class="article-content__text article-text">
    <p>...</p>
</div>

5) Если карточки статьи нет на главной, но ее новости идут в списке, то к к классу article добавляем еще один класс - article_additional (чтобы отображался буллет первой новости списка)
