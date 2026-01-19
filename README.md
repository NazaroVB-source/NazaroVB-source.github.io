# 🚀 NazaroVB Dijital Atölye ve Projeleri

Merhaba! Ben **NazaroVB**, bu benim dijital oyun alanım. Burada Linux Mint üzerinde geliştirdiğim oyunlarımı, Python kodlarımı ve kimsenin bilmediği yazılım tüyolarımı paylaşıyorum. Amacım, teknolojiyi herkesin anlayacağı dile çevirmek ve efsane şeyler yaratmak!

---

### 🔥 Becerilerim & Araçlarım

[![HTML Badge](https://img.shields.io)](https://developer.mozilla.org)
[![CSS Badge](https://img.shields.io)](https://developer.mozilla.org)
[![JavaScript Badge](https://img.shields.io)](https://developer.mozilla.org)
[![Python Badge](https://img.shields.io)](https://www.python.org)
[![Linux Mint Badge](https://img.shields.io)](https://linuxmint.com)

---

### 🎮 Projelerimden Bir Örnek: Minecraft Puan Hesaplayıcısı

İşte SQL mantığı ile yazdığım basit bir Python kodu örneği:

```python
def hesapla_puan(miktar_tmy, kur=40):
    """
    Girilen TMY miktarına göre kazanılacak puanı hesaplar.
    1 TMY = 40 Puan
    """
    toplam_puan = miktar_tmy * kur
    return toplam_puan

# Kullanım örneği:
yatirilan_para = 5 # 5 TMY yatırıldı
kazanilan = hesapla_puan(yatirilan_para)

print(f"Yatırılan: {yatirilan_para} TMY")
print(f"Kazanılan Puan: {kazanilan}") # Çıktı: Kazanılan Puan: 200
