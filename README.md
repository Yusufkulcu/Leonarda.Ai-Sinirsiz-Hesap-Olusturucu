## **Leonarda.Ai Otomatik Hesap Oluşturucu**

Herkese hayırlı ramazanlar. Bugün can sıkıntısından bir bot geliştirdim , sizlerle de paylaşmak istedim. Bot [Leonarda.Ai](http://https://leonardo.ai/ "Leonarda.Ai") sitesinde 150 kredilik hesaplar oluşturuyor. Bu hesapları kendiniz elle de açabiliyorsunuz aslında fakat amaç işte birşeyler yapmak  . Kurulumu ve dosyaları aşağıya resimlerle ekledim. Tamamen açık kaynak bir yazılımdır Nodejs ile yazılmıştır. Botun mantığı şu şekildedir. Bot öncelikle [Mail.tm](https://mail.tm/tr/ "Mail.tm") sitesinden(geçici mail sitesi) bir mail oluşturuyor ve daha sonra siteye kayıt oluyor. Kayıt sonrası gelen onay kodunu otomatik tarayarak hesabı onaylı hale getiriyor. Süreç bu kadar. Açık kaynak bir yazılım olduğu için istediğiniz gibi geliştirebilirsiniz.

1-) Nodejs'in sitesine girerek nodejs yazılımını cihazınıza uygun olan versiyonu kurunuz.

![](https://i.hizliresim.com/sndqdkv.jpg)

2-) Proje üzerinden okla gösterilen buton üzerinden projenin kaynak kodlarını zip olarak cihazınıza indiriniz.

![](https://i.hizliresim.com/2if12gy.jpg)

3-) İndirdiğiniz kaynak kodlarını bir klasöre çıkartınız. Görseldeki gibi bir klasör yapısı görmeniz gerekmektedir.

![](https://cdn.r10.net/editor/118847/1593216264.png)

4-) İlgili klasörde boş bir alana shift + sağ tık ile basıldığında görseldeki gibi powershell penceresini burda aç tarzında bişi olması lazım. Bu seçeneğe tıklayarak terminal ekranını açmanız gerekmektedir. Windows sürümüne göre daha farklı bir isim çıkabilir. Macos cihazlarda bu seçenek çıkmayacaktır. Terminali açıp cd komutu ile ilgili klasöre gidebilirsiniz.

![](https://cdn.r10.net/editor/118847/470172162.png)

5-) Açılan terminal ekranına görseldeki komutu girip enter tuşuna basınız.

![](https://cdn.r10.net/editor/118847/611286571.png)

6-) Proje klasöründe node_modules klasörü oluştuysa işlemler başarılı demektir. Oluşmadı ise eğer 5. adımı tekrarlayınız.

![](https://cdn.r10.net/editor/118847/1503384854.png)

7-) Aynı terminal ekranına görseldeki komutu girip enter dediğimizde ise bizden oluşturulması istenen hesap sayısını istiyor. İstenen sayıyı girdikten sonra bot terminal ekranında bilgilendirme vermekte ve oluşan hesaplar accounts/accounts.txt dosyasına kayıt olmaktadır.

![](https://cdn.r10.net/editor/118847/3822464446.png)

![](https://cdn.r10.net/editor/118847/2882215808.png)
