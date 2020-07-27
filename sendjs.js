$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: '/send.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function () {
                // Вывод текста результата отправки
                $(formNm).html('<p style="text-align:center">Сообщение успешно отправлено</p>');
            },
            error: function () {
                // Вывод текста ошибки отправки
                $(formNm).html('<p style="text-align:center">При отпраке сообщения возникла ошибка</p>');
            }
        });
        return false;
    });
});