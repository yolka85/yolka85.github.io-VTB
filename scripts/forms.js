var selectDate = $('#date'),
    selectMontn = $('#month'),
    selectYear = $('#year'),
    date = [],
    month = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
    year = [];
for (var i = 1; i <= 31; i++) { 
    date.push(i);
}
for (var i = 1950; i <= 2020; i++) { 
    year.push(i);
}
function fillSelect(select, options) {
    $(options).each(function (index, element) {
        select.append($('<option>', {
            value: element,
            text: element
        }))
    })
}
function setDate (pageId, date, month, year) {
    $(pageId).find($('#date')).val(date);
    $(pageId).find($('#month')).val(month);
    $(pageId).find($('#year')).val(year);
}
fillSelect(selectDate, date);
fillSelect(selectMontn, month);
fillSelect(selectYear, year);
setDate('#birth-sertify', '22', 'апрель', '1977');
setDate('#manual', '22', 'апрель', '1977');
setDate('#child-14', '6', 'март', '2000');

