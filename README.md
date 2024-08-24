# handbuz ui

My UI Library, projelerinizde kullanabileceğiniz basit ve özelleştirilebilir kullanıcı arayüzü bileşenleri sunar. Bu kütüphane, modern web uygulamaları geliştirmeyi kolaylaştırmak için tasarlanmıştır.

## Bileşenler

- **Button**: Farklı durum ve eylemleri temsil eden düğme bileşeni.
- **Input**: Kullanıcı girdilerini alabileceğiniz metin girişi bileşeni.
- **Checkbox**: Birden fazla seçeneğin seçimini sağlayan onay kutusu bileşeni.

## Kurulum

Projeye dahil etmek için:

```bash
npm install handbuz-ui

veya

yarn add handbuz-ui

Kullanım
Aşağıda kütüphanedeki bileşenlerin nasıl kullanılacağına dair basit bir örnek yer almaktadır:

import { Button, Input, Checkbox } from 'handbuz-ui';


function App() {
  return (
    <div>
      <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
      <Input placeholder="Enter text here" />
      <Checkbox label="I agree" />
    </div>
  );
}

Katkıda Bulunma
Katkılarınızı bekliyoruz! Herhangi bir hata bildirimi ya da geliştirme önerisi için lütfen bir issue açın veya doğrudan bir pull request gönderin.
