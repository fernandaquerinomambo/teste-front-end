const controller = {
  productsArray: {
    /** @method commaInMoney "Método substituir os pontos por vírgulas nos preços dos produtos"
     * @param {Array} productsArray "Array contendo os produtos que serão utilizados na página."
     * @returns {Array} "Array de produtos com os preços modificados"
     */
    commaInMoney(productsArray) {
      let result = productsArray.map((value) => {
        return {
          productName: value.productName,
          productBrand: value.productBrand,
          productPrice: value.productPrice.replace('.', ','),
          productSalePrice: value.productSalePrice.replace('.', ','),
          productIsMamboPlus: value.productIsMamboPlus,
          productIsOrganic: value.productIsOrganic,
          productHasStock: value.productHasStock,
          productDescription: value.productDescription,
        };
      });

      return result;
    },

    /** @method addImageKey "Método adicionar as imagens nos produtos juntamente com uma nova Key chamada 'productImages'"
     * @param {Array} productsArray "Array contendo os produtos que serão utilizados na página."
     * @returns {Array} "Array de produtos com as imagens inseridas na Key 'productImages'"
     */
    addImageKey(productsArray) {
      let result = productsArray.map((value) => {
        let productImagesLocal = [];

        switch (value.productName) {
          case 'Carne Moída de Patinho Bovina Resfriada Bandeja':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/a83e/d341/adc59341c8d9b54f76aa430164074beb?Expires=1596412800&Signature=Okp0nL9hm0PIvllFohX7XkiNsqZi5oWxhbr~~opAmgnlTUup0KRkznWAI8T8klr9dvE8KDbWb4oN6Qf9dhPvp1ZLpv8MY7DqMETRy-RgQGMgYcfTsMxlDzZTarwsI~gI2HZMkjBPK66nVt3tlPQ6ygIFGVjBewi3Dlm9LkE7V~vv4ejwDaVUu6adCD3bOVZHDAgQHn5WD0GgV6nVEpPtgUHXoiJ3fl4hcZW-GHFX4NMObwyQrPsNvMX3kIn-3fcpWigBdWw~CGp4bMXTwnlFPvaqS4IhiM9VxohsDxthf9RexVw06XlO2MAWVkqxaFB5r8XP2Lo5FSw0-OXum-Hs7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/a83e/d341/adc59341c8d9b54f76aa430164074beb?Expires=1596412800&Signature=Okp0nL9hm0PIvllFohX7XkiNsqZi5oWxhbr~~opAmgnlTUup0KRkznWAI8T8klr9dvE8KDbWb4oN6Qf9dhPvp1ZLpv8MY7DqMETRy-RgQGMgYcfTsMxlDzZTarwsI~gI2HZMkjBPK66nVt3tlPQ6ygIFGVjBewi3Dlm9LkE7V~vv4ejwDaVUu6adCD3bOVZHDAgQHn5WD0GgV6nVEpPtgUHXoiJ3fl4hcZW-GHFX4NMObwyQrPsNvMX3kIn-3fcpWigBdWw~CGp4bMXTwnlFPvaqS4IhiM9VxohsDxthf9RexVw06XlO2MAWVkqxaFB5r8XP2Lo5FSw0-OXum-Hs7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/a83e/d341/adc59341c8d9b54f76aa430164074beb?Expires=1596412800&Signature=Okp0nL9hm0PIvllFohX7XkiNsqZi5oWxhbr~~opAmgnlTUup0KRkznWAI8T8klr9dvE8KDbWb4oN6Qf9dhPvp1ZLpv8MY7DqMETRy-RgQGMgYcfTsMxlDzZTarwsI~gI2HZMkjBPK66nVt3tlPQ6ygIFGVjBewi3Dlm9LkE7V~vv4ejwDaVUu6adCD3bOVZHDAgQHn5WD0GgV6nVEpPtgUHXoiJ3fl4hcZW-GHFX4NMObwyQrPsNvMX3kIn-3fcpWigBdWw~CGp4bMXTwnlFPvaqS4IhiM9VxohsDxthf9RexVw06XlO2MAWVkqxaFB5r8XP2Lo5FSw0-OXum-Hs7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/a83e/d341/adc59341c8d9b54f76aa430164074beb?Expires=1596412800&Signature=Okp0nL9hm0PIvllFohX7XkiNsqZi5oWxhbr~~opAmgnlTUup0KRkznWAI8T8klr9dvE8KDbWb4oN6Qf9dhPvp1ZLpv8MY7DqMETRy-RgQGMgYcfTsMxlDzZTarwsI~gI2HZMkjBPK66nVt3tlPQ6ygIFGVjBewi3Dlm9LkE7V~vv4ejwDaVUu6adCD3bOVZHDAgQHn5WD0GgV6nVEpPtgUHXoiJ3fl4hcZW-GHFX4NMObwyQrPsNvMX3kIn-3fcpWigBdWw~CGp4bMXTwnlFPvaqS4IhiM9VxohsDxthf9RexVw06XlO2MAWVkqxaFB5r8XP2Lo5FSw0-OXum-Hs7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Vinho Chileno Branco Gewurztraminer Adobe Orgânico 750ml':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/66f6/37a1/55375e9fa65d088dc1a02dc466e40fa7?Expires=1596412800&Signature=ek9dD2LhKNL0MU4ue6q32Jmoj2vVO0heikBgfeldYc5RKMREDLQAxsIOllm9tIZElHYmsnzroyL3IbGg8bdom-ZzO8Bdf~3XDj2OImttKZamwicKqbEV6DHX4tLU~gk2Tp9oudEKHlxXpmrEBn5SxcHlxCLW91AQyTlVUaJxZLtsQWdBOEAjIyTLLRIaIc7NWM-n3OKs3dJ3FTjGNnlyWwvty7nZxHEmXPkBtOte4kINNWxxnZV8JTVNiJ9YpnUerbQu3PVdBrmgpLwgQALz1FwRSYEH4eum0zAyXQixv4WI3MeO12GPmLT~RR59iTBwEd9PYYJW8ySAreFOAn4~fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/66f6/37a1/55375e9fa65d088dc1a02dc466e40fa7?Expires=1596412800&Signature=ek9dD2LhKNL0MU4ue6q32Jmoj2vVO0heikBgfeldYc5RKMREDLQAxsIOllm9tIZElHYmsnzroyL3IbGg8bdom-ZzO8Bdf~3XDj2OImttKZamwicKqbEV6DHX4tLU~gk2Tp9oudEKHlxXpmrEBn5SxcHlxCLW91AQyTlVUaJxZLtsQWdBOEAjIyTLLRIaIc7NWM-n3OKs3dJ3FTjGNnlyWwvty7nZxHEmXPkBtOte4kINNWxxnZV8JTVNiJ9YpnUerbQu3PVdBrmgpLwgQALz1FwRSYEH4eum0zAyXQixv4WI3MeO12GPmLT~RR59iTBwEd9PYYJW8ySAreFOAn4~fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/66f6/37a1/55375e9fa65d088dc1a02dc466e40fa7?Expires=1596412800&Signature=ek9dD2LhKNL0MU4ue6q32Jmoj2vVO0heikBgfeldYc5RKMREDLQAxsIOllm9tIZElHYmsnzroyL3IbGg8bdom-ZzO8Bdf~3XDj2OImttKZamwicKqbEV6DHX4tLU~gk2Tp9oudEKHlxXpmrEBn5SxcHlxCLW91AQyTlVUaJxZLtsQWdBOEAjIyTLLRIaIc7NWM-n3OKs3dJ3FTjGNnlyWwvty7nZxHEmXPkBtOte4kINNWxxnZV8JTVNiJ9YpnUerbQu3PVdBrmgpLwgQALz1FwRSYEH4eum0zAyXQixv4WI3MeO12GPmLT~RR59iTBwEd9PYYJW8ySAreFOAn4~fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/66f6/37a1/55375e9fa65d088dc1a02dc466e40fa7?Expires=1596412800&Signature=ek9dD2LhKNL0MU4ue6q32Jmoj2vVO0heikBgfeldYc5RKMREDLQAxsIOllm9tIZElHYmsnzroyL3IbGg8bdom-ZzO8Bdf~3XDj2OImttKZamwicKqbEV6DHX4tLU~gk2Tp9oudEKHlxXpmrEBn5SxcHlxCLW91AQyTlVUaJxZLtsQWdBOEAjIyTLLRIaIc7NWM-n3OKs3dJ3FTjGNnlyWwvty7nZxHEmXPkBtOte4kINNWxxnZV8JTVNiJ9YpnUerbQu3PVdBrmgpLwgQALz1FwRSYEH4eum0zAyXQixv4WI3MeO12GPmLT~RR59iTBwEd9PYYJW8ySAreFOAn4~fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Amaranto de Flocos Orgânico Jasmine 150g':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/eed0/2e18/450a2336303293f21ae6479d2f7ca7d0?Expires=1596412800&Signature=Kil4~6djTbxY0Nilgisc-nDF5p3O4TYcCCjLOrGkrHRLh294puK8G8OLOSVHtp7hLc1NVLJiGXvesQGIdrq6OCVPpHYnXfWwoVm2JtdGc9A633O05VPW6R-wnw3F1z-jFdShW2tzcq9ksq1VxdwpKlQEqmsCIyec34y58wK52bHzeRlmFCNRgApUhLiVEHOsqC0rRtFwQQDO89BxLRhXp8B8WX5gH2zu1AjXKp2NSLl-R1cPYVHLwI9Edzt6NQ5WvfKyP2APE6t0kYsfZKPwSDirIZl6fp5plksi18Ye8nCHKv~8ar4UdjJdvWgJBN0kFGOLR6C04kaPc80051srsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/eed0/2e18/450a2336303293f21ae6479d2f7ca7d0?Expires=1596412800&Signature=Kil4~6djTbxY0Nilgisc-nDF5p3O4TYcCCjLOrGkrHRLh294puK8G8OLOSVHtp7hLc1NVLJiGXvesQGIdrq6OCVPpHYnXfWwoVm2JtdGc9A633O05VPW6R-wnw3F1z-jFdShW2tzcq9ksq1VxdwpKlQEqmsCIyec34y58wK52bHzeRlmFCNRgApUhLiVEHOsqC0rRtFwQQDO89BxLRhXp8B8WX5gH2zu1AjXKp2NSLl-R1cPYVHLwI9Edzt6NQ5WvfKyP2APE6t0kYsfZKPwSDirIZl6fp5plksi18Ye8nCHKv~8ar4UdjJdvWgJBN0kFGOLR6C04kaPc80051srsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/eed0/2e18/450a2336303293f21ae6479d2f7ca7d0?Expires=1596412800&Signature=Kil4~6djTbxY0Nilgisc-nDF5p3O4TYcCCjLOrGkrHRLh294puK8G8OLOSVHtp7hLc1NVLJiGXvesQGIdrq6OCVPpHYnXfWwoVm2JtdGc9A633O05VPW6R-wnw3F1z-jFdShW2tzcq9ksq1VxdwpKlQEqmsCIyec34y58wK52bHzeRlmFCNRgApUhLiVEHOsqC0rRtFwQQDO89BxLRhXp8B8WX5gH2zu1AjXKp2NSLl-R1cPYVHLwI9Edzt6NQ5WvfKyP2APE6t0kYsfZKPwSDirIZl6fp5plksi18Ye8nCHKv~8ar4UdjJdvWgJBN0kFGOLR6C04kaPc80051srsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/eed0/2e18/450a2336303293f21ae6479d2f7ca7d0?Expires=1596412800&Signature=Kil4~6djTbxY0Nilgisc-nDF5p3O4TYcCCjLOrGkrHRLh294puK8G8OLOSVHtp7hLc1NVLJiGXvesQGIdrq6OCVPpHYnXfWwoVm2JtdGc9A633O05VPW6R-wnw3F1z-jFdShW2tzcq9ksq1VxdwpKlQEqmsCIyec34y58wK52bHzeRlmFCNRgApUhLiVEHOsqC0rRtFwQQDO89BxLRhXp8B8WX5gH2zu1AjXKp2NSLl-R1cPYVHLwI9Edzt6NQ5WvfKyP2APE6t0kYsfZKPwSDirIZl6fp5plksi18Ye8nCHKv~8ar4UdjJdvWgJBN0kFGOLR6C04kaPc80051srsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Água Mineral sem Gás Bonafont 1,5 Litro':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/8dc1/0e18/608690abe1e008de9dd7bc71b4937459?Expires=1596412800&Signature=bDfar9zy-GhKf1fthBEzBFBNpGUEyfKIBZEEgU7K8XiRI5ykvJxi~lyXVglD37PNKI6YUKizqL5Eryis851brdyzSCfqPwuwl3wJUlkNgaT9VRYuCVvIEyq6H8Hwxr9MmR7syGlcS4zh1q3yTwWxZME~56Qa1UI2Xh-iqOWNyLdWE5TK19mBowRPqddmidWC1-82avM~IET8pjGxA1OtP32XmSS8mzw~EKSYQ02XAtBssFylA-EosJDH6aJ3fiQksJoVlghxLI2SnAWOLetiXGRWlyZ4YaMTRcqjLVbNg7xC~4oyICP0QgigNpliFxoK9eoyr4QLNtclO4Vet8~zAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/8dc1/0e18/608690abe1e008de9dd7bc71b4937459?Expires=1596412800&Signature=bDfar9zy-GhKf1fthBEzBFBNpGUEyfKIBZEEgU7K8XiRI5ykvJxi~lyXVglD37PNKI6YUKizqL5Eryis851brdyzSCfqPwuwl3wJUlkNgaT9VRYuCVvIEyq6H8Hwxr9MmR7syGlcS4zh1q3yTwWxZME~56Qa1UI2Xh-iqOWNyLdWE5TK19mBowRPqddmidWC1-82avM~IET8pjGxA1OtP32XmSS8mzw~EKSYQ02XAtBssFylA-EosJDH6aJ3fiQksJoVlghxLI2SnAWOLetiXGRWlyZ4YaMTRcqjLVbNg7xC~4oyICP0QgigNpliFxoK9eoyr4QLNtclO4Vet8~zAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/8dc1/0e18/608690abe1e008de9dd7bc71b4937459?Expires=1596412800&Signature=bDfar9zy-GhKf1fthBEzBFBNpGUEyfKIBZEEgU7K8XiRI5ykvJxi~lyXVglD37PNKI6YUKizqL5Eryis851brdyzSCfqPwuwl3wJUlkNgaT9VRYuCVvIEyq6H8Hwxr9MmR7syGlcS4zh1q3yTwWxZME~56Qa1UI2Xh-iqOWNyLdWE5TK19mBowRPqddmidWC1-82avM~IET8pjGxA1OtP32XmSS8mzw~EKSYQ02XAtBssFylA-EosJDH6aJ3fiQksJoVlghxLI2SnAWOLetiXGRWlyZ4YaMTRcqjLVbNg7xC~4oyICP0QgigNpliFxoK9eoyr4QLNtclO4Vet8~zAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/8dc1/0e18/608690abe1e008de9dd7bc71b4937459?Expires=1596412800&Signature=bDfar9zy-GhKf1fthBEzBFBNpGUEyfKIBZEEgU7K8XiRI5ykvJxi~lyXVglD37PNKI6YUKizqL5Eryis851brdyzSCfqPwuwl3wJUlkNgaT9VRYuCVvIEyq6H8Hwxr9MmR7syGlcS4zh1q3yTwWxZME~56Qa1UI2Xh-iqOWNyLdWE5TK19mBowRPqddmidWC1-82avM~IET8pjGxA1OtP32XmSS8mzw~EKSYQ02XAtBssFylA-EosJDH6aJ3fiQksJoVlghxLI2SnAWOLetiXGRWlyZ4YaMTRcqjLVbNg7xC~4oyICP0QgigNpliFxoK9eoyr4QLNtclO4Vet8~zAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Lava Roupa em Pó Lavagem Perfeita Omo 800g':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/faa2/ab9b/2de8ca2d284721b0893c51f896f7b177?Expires=1596412800&Signature=WwJ0QmC3Ccj1UNospw0zgYQaENxP7rRIXIUKSDQ2kQ3mx5OM1hczaxMM6jXqJVHGW~FWIIvLjqksfz1bZY-fNoj69crkC~DtBZtj9SJ2ZpmvcRt81SN9pV5GSnA-mAQ9MkctJ4R0VtAyAaTbQ2Lqslln8ObQ104sRpGkjlNztH6XuMV56cNKmeP-zTeoHeGKY2ogrp3W54hoG5CY4PxPHF8W8AE-tCrzqh6aZiUhBmxdzgHlxHTthfFN6-xcXk0gm3K9wwpvIrcJQXz-Ib1l5We1U9JXHXc9z-MFublscaQgBdjdFN5xsmHY2d7QLA0f7oTcXEtOd4OkvCpWHcZcJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/faa2/ab9b/2de8ca2d284721b0893c51f896f7b177?Expires=1596412800&Signature=WwJ0QmC3Ccj1UNospw0zgYQaENxP7rRIXIUKSDQ2kQ3mx5OM1hczaxMM6jXqJVHGW~FWIIvLjqksfz1bZY-fNoj69crkC~DtBZtj9SJ2ZpmvcRt81SN9pV5GSnA-mAQ9MkctJ4R0VtAyAaTbQ2Lqslln8ObQ104sRpGkjlNztH6XuMV56cNKmeP-zTeoHeGKY2ogrp3W54hoG5CY4PxPHF8W8AE-tCrzqh6aZiUhBmxdzgHlxHTthfFN6-xcXk0gm3K9wwpvIrcJQXz-Ib1l5We1U9JXHXc9z-MFublscaQgBdjdFN5xsmHY2d7QLA0f7oTcXEtOd4OkvCpWHcZcJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/faa2/ab9b/2de8ca2d284721b0893c51f896f7b177?Expires=1596412800&Signature=WwJ0QmC3Ccj1UNospw0zgYQaENxP7rRIXIUKSDQ2kQ3mx5OM1hczaxMM6jXqJVHGW~FWIIvLjqksfz1bZY-fNoj69crkC~DtBZtj9SJ2ZpmvcRt81SN9pV5GSnA-mAQ9MkctJ4R0VtAyAaTbQ2Lqslln8ObQ104sRpGkjlNztH6XuMV56cNKmeP-zTeoHeGKY2ogrp3W54hoG5CY4PxPHF8W8AE-tCrzqh6aZiUhBmxdzgHlxHTthfFN6-xcXk0gm3K9wwpvIrcJQXz-Ib1l5We1U9JXHXc9z-MFublscaQgBdjdFN5xsmHY2d7QLA0f7oTcXEtOd4OkvCpWHcZcJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/faa2/ab9b/2de8ca2d284721b0893c51f896f7b177?Expires=1596412800&Signature=WwJ0QmC3Ccj1UNospw0zgYQaENxP7rRIXIUKSDQ2kQ3mx5OM1hczaxMM6jXqJVHGW~FWIIvLjqksfz1bZY-fNoj69crkC~DtBZtj9SJ2ZpmvcRt81SN9pV5GSnA-mAQ9MkctJ4R0VtAyAaTbQ2Lqslln8ObQ104sRpGkjlNztH6XuMV56cNKmeP-zTeoHeGKY2ogrp3W54hoG5CY4PxPHF8W8AE-tCrzqh6aZiUhBmxdzgHlxHTthfFN6-xcXk0gm3K9wwpvIrcJQXz-Ib1l5We1U9JXHXc9z-MFublscaQgBdjdFN5xsmHY2d7QLA0f7oTcXEtOd4OkvCpWHcZcJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Morango Orgânico FLD 250g':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/ae6e/a809/fbc5133129eccaa5e2309e061dcff3b9?Expires=1596412800&Signature=VYjQtxrVFa2OSruXu149JyYKyf8~TebCsJXj~mjzT1QmqivH6vp4SQXJ9KwD2mSXfxXnfBbbd5NlMVEmqGDL79j58I~uZ1vIZwS7h2rMOwlEGf8Xz48RBuySpaqKREGiqjrqLCaWOHZXpGPvsR0~DnythfoT6yHZ-8GZ8gsIZVaUv0YjEkEJ-NPOcN4bQybqsH7Dl7AXoPRAfZSXWFYIpSJ9tTj9~AdpOdoGtNE2bsRQYAw93tnUBoBsajtPgWL~mlLarqmPhfAZi0rVupwMqmT8hdhAf~ji0dEECRxwa0KS6Xx~w1Dls-2khRYljvf7KM2tMaweZ6G1PgKuNxMBAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/ae6e/a809/fbc5133129eccaa5e2309e061dcff3b9?Expires=1596412800&Signature=VYjQtxrVFa2OSruXu149JyYKyf8~TebCsJXj~mjzT1QmqivH6vp4SQXJ9KwD2mSXfxXnfBbbd5NlMVEmqGDL79j58I~uZ1vIZwS7h2rMOwlEGf8Xz48RBuySpaqKREGiqjrqLCaWOHZXpGPvsR0~DnythfoT6yHZ-8GZ8gsIZVaUv0YjEkEJ-NPOcN4bQybqsH7Dl7AXoPRAfZSXWFYIpSJ9tTj9~AdpOdoGtNE2bsRQYAw93tnUBoBsajtPgWL~mlLarqmPhfAZi0rVupwMqmT8hdhAf~ji0dEECRxwa0KS6Xx~w1Dls-2khRYljvf7KM2tMaweZ6G1PgKuNxMBAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/ae6e/a809/fbc5133129eccaa5e2309e061dcff3b9?Expires=1596412800&Signature=VYjQtxrVFa2OSruXu149JyYKyf8~TebCsJXj~mjzT1QmqivH6vp4SQXJ9KwD2mSXfxXnfBbbd5NlMVEmqGDL79j58I~uZ1vIZwS7h2rMOwlEGf8Xz48RBuySpaqKREGiqjrqLCaWOHZXpGPvsR0~DnythfoT6yHZ-8GZ8gsIZVaUv0YjEkEJ-NPOcN4bQybqsH7Dl7AXoPRAfZSXWFYIpSJ9tTj9~AdpOdoGtNE2bsRQYAw93tnUBoBsajtPgWL~mlLarqmPhfAZi0rVupwMqmT8hdhAf~ji0dEECRxwa0KS6Xx~w1Dls-2khRYljvf7KM2tMaweZ6G1PgKuNxMBAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/ae6e/a809/fbc5133129eccaa5e2309e061dcff3b9?Expires=1596412800&Signature=VYjQtxrVFa2OSruXu149JyYKyf8~TebCsJXj~mjzT1QmqivH6vp4SQXJ9KwD2mSXfxXnfBbbd5NlMVEmqGDL79j58I~uZ1vIZwS7h2rMOwlEGf8Xz48RBuySpaqKREGiqjrqLCaWOHZXpGPvsR0~DnythfoT6yHZ-8GZ8gsIZVaUv0YjEkEJ-NPOcN4bQybqsH7Dl7AXoPRAfZSXWFYIpSJ9tTj9~AdpOdoGtNE2bsRQYAw93tnUBoBsajtPgWL~mlLarqmPhfAZi0rVupwMqmT8hdhAf~ji0dEECRxwa0KS6Xx~w1Dls-2khRYljvf7KM2tMaweZ6G1PgKuNxMBAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Suco de Laranja Integral Natural One 1,5 Litro':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/a754/e08d/7cc2c0be6b255804656fbaa194438b89?Expires=1596412800&Signature=K7X-FoCpOyDsl-iT7isoZjs-QsZ-9rICvV-BNdYiJ1hUkYS6RalGt-p-ZTPZDXPJW-tGY2~DKUBuTWsh6IUlyX5MauaUoNnHTmiI2MOK~78e96sGMbBA7ySVndcGFGSm2MOTFBsOAP5fh8FE4J34CdlndFxxw5c1RpCpdUtI9ZCXgPToyiVJ9AO1KijRuhE6s4DvXQDYdh5fZl1aUP2CMTIzuPJW6P0tJ6mdQE1mOoVa3n39h1cQb~VQiqhYfXRWywcQU5mXyAuMKZCNphkCwW4C4msL2qtBwj-8wGGWqsNuCg-9OzmQTb1Y1Xb5JICMdu3DaSFO186h4gHIXjlFaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/a754/e08d/7cc2c0be6b255804656fbaa194438b89?Expires=1596412800&Signature=K7X-FoCpOyDsl-iT7isoZjs-QsZ-9rICvV-BNdYiJ1hUkYS6RalGt-p-ZTPZDXPJW-tGY2~DKUBuTWsh6IUlyX5MauaUoNnHTmiI2MOK~78e96sGMbBA7ySVndcGFGSm2MOTFBsOAP5fh8FE4J34CdlndFxxw5c1RpCpdUtI9ZCXgPToyiVJ9AO1KijRuhE6s4DvXQDYdh5fZl1aUP2CMTIzuPJW6P0tJ6mdQE1mOoVa3n39h1cQb~VQiqhYfXRWywcQU5mXyAuMKZCNphkCwW4C4msL2qtBwj-8wGGWqsNuCg-9OzmQTb1Y1Xb5JICMdu3DaSFO186h4gHIXjlFaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/a754/e08d/7cc2c0be6b255804656fbaa194438b89?Expires=1596412800&Signature=K7X-FoCpOyDsl-iT7isoZjs-QsZ-9rICvV-BNdYiJ1hUkYS6RalGt-p-ZTPZDXPJW-tGY2~DKUBuTWsh6IUlyX5MauaUoNnHTmiI2MOK~78e96sGMbBA7ySVndcGFGSm2MOTFBsOAP5fh8FE4J34CdlndFxxw5c1RpCpdUtI9ZCXgPToyiVJ9AO1KijRuhE6s4DvXQDYdh5fZl1aUP2CMTIzuPJW6P0tJ6mdQE1mOoVa3n39h1cQb~VQiqhYfXRWywcQU5mXyAuMKZCNphkCwW4C4msL2qtBwj-8wGGWqsNuCg-9OzmQTb1Y1Xb5JICMdu3DaSFO186h4gHIXjlFaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/a754/e08d/7cc2c0be6b255804656fbaa194438b89?Expires=1596412800&Signature=K7X-FoCpOyDsl-iT7isoZjs-QsZ-9rICvV-BNdYiJ1hUkYS6RalGt-p-ZTPZDXPJW-tGY2~DKUBuTWsh6IUlyX5MauaUoNnHTmiI2MOK~78e96sGMbBA7ySVndcGFGSm2MOTFBsOAP5fh8FE4J34CdlndFxxw5c1RpCpdUtI9ZCXgPToyiVJ9AO1KijRuhE6s4DvXQDYdh5fZl1aUP2CMTIzuPJW6P0tJ6mdQE1mOoVa3n39h1cQb~VQiqhYfXRWywcQU5mXyAuMKZCNphkCwW4C4msL2qtBwj-8wGGWqsNuCg-9OzmQTb1Y1Xb5JICMdu3DaSFO186h4gHIXjlFaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Brocolis Ninja Bandeja 300g':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/e511/d445/723a77e88cb56d0ef4f7ad5d7476b53a?Expires=1596412800&Signature=A0qq4uoqnf4GwAsjxw3pqKOeGLVMjbtkhbgkMfmASBKTaTa-l-IJPAlTxMttpp8l55ldNXGEofSatG8kgk0hfQkul-cIm64D8mzurznyTmm5M5D-eeW2Fb3~I3aw70mhwRBGbIoxF1J~nMSlPzSrm7pGZQdDf4q4L9T0wnsX1zqnIsA~U2ec4ETUa973kVVTdRY73O888arLBxCnVP5zC38pqkqIDJbDBuVbbfBID0SOMmENZf15qeX8mix3mLHngFNKIYJbZgvBQXs2cSRfUfVSNHM2s0bRs~yZGBEpZu~JpK6pAk-xOtachuvY~~CoJr0Pua0roRc5pQ8NF6~Fyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/e511/d445/723a77e88cb56d0ef4f7ad5d7476b53a?Expires=1596412800&Signature=A0qq4uoqnf4GwAsjxw3pqKOeGLVMjbtkhbgkMfmASBKTaTa-l-IJPAlTxMttpp8l55ldNXGEofSatG8kgk0hfQkul-cIm64D8mzurznyTmm5M5D-eeW2Fb3~I3aw70mhwRBGbIoxF1J~nMSlPzSrm7pGZQdDf4q4L9T0wnsX1zqnIsA~U2ec4ETUa973kVVTdRY73O888arLBxCnVP5zC38pqkqIDJbDBuVbbfBID0SOMmENZf15qeX8mix3mLHngFNKIYJbZgvBQXs2cSRfUfVSNHM2s0bRs~yZGBEpZu~JpK6pAk-xOtachuvY~~CoJr0Pua0roRc5pQ8NF6~Fyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/e511/d445/723a77e88cb56d0ef4f7ad5d7476b53a?Expires=1596412800&Signature=A0qq4uoqnf4GwAsjxw3pqKOeGLVMjbtkhbgkMfmASBKTaTa-l-IJPAlTxMttpp8l55ldNXGEofSatG8kgk0hfQkul-cIm64D8mzurznyTmm5M5D-eeW2Fb3~I3aw70mhwRBGbIoxF1J~nMSlPzSrm7pGZQdDf4q4L9T0wnsX1zqnIsA~U2ec4ETUa973kVVTdRY73O888arLBxCnVP5zC38pqkqIDJbDBuVbbfBID0SOMmENZf15qeX8mix3mLHngFNKIYJbZgvBQXs2cSRfUfVSNHM2s0bRs~yZGBEpZu~JpK6pAk-xOtachuvY~~CoJr0Pua0roRc5pQ8NF6~Fyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/e511/d445/723a77e88cb56d0ef4f7ad5d7476b53a?Expires=1596412800&Signature=A0qq4uoqnf4GwAsjxw3pqKOeGLVMjbtkhbgkMfmASBKTaTa-l-IJPAlTxMttpp8l55ldNXGEofSatG8kgk0hfQkul-cIm64D8mzurznyTmm5M5D-eeW2Fb3~I3aw70mhwRBGbIoxF1J~nMSlPzSrm7pGZQdDf4q4L9T0wnsX1zqnIsA~U2ec4ETUa973kVVTdRY73O888arLBxCnVP5zC38pqkqIDJbDBuVbbfBID0SOMmENZf15qeX8mix3mLHngFNKIYJbZgvBQXs2cSRfUfVSNHM2s0bRs~yZGBEpZu~JpK6pAk-xOtachuvY~~CoJr0Pua0roRc5pQ8NF6~Fyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Brioche Mambo 400g':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/49dc/6be4/572ce91427213f5c8d2416b685b911dd?Expires=1596412800&Signature=XQXTBr821owKxw4q78tXMNSz16oWzy08GKjGGREf8WO9TWUKSbMSfOZdZS0kTSgEUTzehPI~CB0v4k~-9RRN9paXCrXdJ-jp2S9DkhRMQdGIxbcfNEANSSDd~qayYfC-LPSdE0q9IQEj9KAHH1MpjLXuCEVie-pgNJYTZ54rm75hfO9fvNPamR1~ppu9ZkSAkn-kvPfagph6txmC~-5iRy9pZB4Wd-n7hih8hUtuNSKQ7ucd96eKOPcIK6RIXcF8V0Zrgc1eluk3ED-ZRrl8gkzYtl8WVexwOZrmKYcZchQjE8gQ9ReQr4bgrTpwXWJ9W3GWQPImH~nP2TgG6SvAdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/49dc/6be4/572ce91427213f5c8d2416b685b911dd?Expires=1596412800&Signature=XQXTBr821owKxw4q78tXMNSz16oWzy08GKjGGREf8WO9TWUKSbMSfOZdZS0kTSgEUTzehPI~CB0v4k~-9RRN9paXCrXdJ-jp2S9DkhRMQdGIxbcfNEANSSDd~qayYfC-LPSdE0q9IQEj9KAHH1MpjLXuCEVie-pgNJYTZ54rm75hfO9fvNPamR1~ppu9ZkSAkn-kvPfagph6txmC~-5iRy9pZB4Wd-n7hih8hUtuNSKQ7ucd96eKOPcIK6RIXcF8V0Zrgc1eluk3ED-ZRrl8gkzYtl8WVexwOZrmKYcZchQjE8gQ9ReQr4bgrTpwXWJ9W3GWQPImH~nP2TgG6SvAdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/49dc/6be4/572ce91427213f5c8d2416b685b911dd?Expires=1596412800&Signature=XQXTBr821owKxw4q78tXMNSz16oWzy08GKjGGREf8WO9TWUKSbMSfOZdZS0kTSgEUTzehPI~CB0v4k~-9RRN9paXCrXdJ-jp2S9DkhRMQdGIxbcfNEANSSDd~qayYfC-LPSdE0q9IQEj9KAHH1MpjLXuCEVie-pgNJYTZ54rm75hfO9fvNPamR1~ppu9ZkSAkn-kvPfagph6txmC~-5iRy9pZB4Wd-n7hih8hUtuNSKQ7ucd96eKOPcIK6RIXcF8V0Zrgc1eluk3ED-ZRrl8gkzYtl8WVexwOZrmKYcZchQjE8gQ9ReQr4bgrTpwXWJ9W3GWQPImH~nP2TgG6SvAdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/49dc/6be4/572ce91427213f5c8d2416b685b911dd?Expires=1596412800&Signature=XQXTBr821owKxw4q78tXMNSz16oWzy08GKjGGREf8WO9TWUKSbMSfOZdZS0kTSgEUTzehPI~CB0v4k~-9RRN9paXCrXdJ-jp2S9DkhRMQdGIxbcfNEANSSDd~qayYfC-LPSdE0q9IQEj9KAHH1MpjLXuCEVie-pgNJYTZ54rm75hfO9fvNPamR1~ppu9ZkSAkn-kvPfagph6txmC~-5iRy9pZB4Wd-n7hih8hUtuNSKQ7ucd96eKOPcIK6RIXcF8V0Zrgc1eluk3ED-ZRrl8gkzYtl8WVexwOZrmKYcZchQjE8gQ9ReQr4bgrTpwXWJ9W3GWQPImH~nP2TgG6SvAdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Salgadinho Queijo Nacho Doritos 167g':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/b24e/7831/47388595cf2e8ee8c20b75c95c940f31?Expires=1596412800&Signature=A0uZTEQKgmCcA74p2QsO-U16Vq9gggZW4HLqOCPj9iqR4mIf36EPR-sYoWjRpbZTwKQXS8ybIGAUQVbaVeDE5gcZoSUg7JcaP9m48jP4gWSZFXSGOQMnlWDsypyMI9Znqz2ewXOshWB2DuuwT2pTvOwTxwNX4s91B0mnkFFTjrDn7~gtoBwyieYuMOcuPtn92KuSoIvYGpTSu-1U3fvXUlpj4ngXxi~KwrI2U~aL10BYX1ine5Oi9EYS1S5vE44H56QGmGfzZZ2YN-II7qfX9rAojqM5wzpO7UDBFO4eVNraTop68ec5bOCVcPTm74KHJsfHQsNUWMfIo7j9RBXuwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/b24e/7831/47388595cf2e8ee8c20b75c95c940f31?Expires=1596412800&Signature=A0uZTEQKgmCcA74p2QsO-U16Vq9gggZW4HLqOCPj9iqR4mIf36EPR-sYoWjRpbZTwKQXS8ybIGAUQVbaVeDE5gcZoSUg7JcaP9m48jP4gWSZFXSGOQMnlWDsypyMI9Znqz2ewXOshWB2DuuwT2pTvOwTxwNX4s91B0mnkFFTjrDn7~gtoBwyieYuMOcuPtn92KuSoIvYGpTSu-1U3fvXUlpj4ngXxi~KwrI2U~aL10BYX1ine5Oi9EYS1S5vE44H56QGmGfzZZ2YN-II7qfX9rAojqM5wzpO7UDBFO4eVNraTop68ec5bOCVcPTm74KHJsfHQsNUWMfIo7j9RBXuwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/b24e/7831/47388595cf2e8ee8c20b75c95c940f31?Expires=1596412800&Signature=A0uZTEQKgmCcA74p2QsO-U16Vq9gggZW4HLqOCPj9iqR4mIf36EPR-sYoWjRpbZTwKQXS8ybIGAUQVbaVeDE5gcZoSUg7JcaP9m48jP4gWSZFXSGOQMnlWDsypyMI9Znqz2ewXOshWB2DuuwT2pTvOwTxwNX4s91B0mnkFFTjrDn7~gtoBwyieYuMOcuPtn92KuSoIvYGpTSu-1U3fvXUlpj4ngXxi~KwrI2U~aL10BYX1ine5Oi9EYS1S5vE44H56QGmGfzZZ2YN-II7qfX9rAojqM5wzpO7UDBFO4eVNraTop68ec5bOCVcPTm74KHJsfHQsNUWMfIo7j9RBXuwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/b24e/7831/47388595cf2e8ee8c20b75c95c940f31?Expires=1596412800&Signature=A0uZTEQKgmCcA74p2QsO-U16Vq9gggZW4HLqOCPj9iqR4mIf36EPR-sYoWjRpbZTwKQXS8ybIGAUQVbaVeDE5gcZoSUg7JcaP9m48jP4gWSZFXSGOQMnlWDsypyMI9Znqz2ewXOshWB2DuuwT2pTvOwTxwNX4s91B0mnkFFTjrDn7~gtoBwyieYuMOcuPtn92KuSoIvYGpTSu-1U3fvXUlpj4ngXxi~KwrI2U~aL10BYX1ine5Oi9EYS1S5vE44H56QGmGfzZZ2YN-II7qfX9rAojqM5wzpO7UDBFO4eVNraTop68ec5bOCVcPTm74KHJsfHQsNUWMfIo7j9RBXuwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Manga Haden 1 Unidade 500g':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/7902/9451/2a77471ca443737bd2f40a7ceb702427?Expires=1596412800&Signature=QxfDtUYsUVxw4eTN5b3kFN7RoI8Y4Nxhy~ys3GTwgIolNUqFrMBvLqfeljXTl9z6r1Kxdm06yICs7wc-4hjYSg2611gjXPWSQicF6kqNT2WhgzeTEFdwwlJoSjNn9NhhmgrAGXTAX4UJ1hwgytOyDLaZQz38cjI3b5aR8wwJoeBXqBh0potBwrH747zQhpVvT8ciRmTAbOHPnCFhN1q6fVbmbM03-WByUXrmWt~1O8qgndNtqxeDcS430bGYLc9zC8MHFMRWNyKuqnbzIbdrfVb~gwRsR~iJTA2jqweQwfIBgJPBYuMU23eF471PRQY~rMhDcgRYjVvtNNxOUeYcuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/7902/9451/2a77471ca443737bd2f40a7ceb702427?Expires=1596412800&Signature=QxfDtUYsUVxw4eTN5b3kFN7RoI8Y4Nxhy~ys3GTwgIolNUqFrMBvLqfeljXTl9z6r1Kxdm06yICs7wc-4hjYSg2611gjXPWSQicF6kqNT2WhgzeTEFdwwlJoSjNn9NhhmgrAGXTAX4UJ1hwgytOyDLaZQz38cjI3b5aR8wwJoeBXqBh0potBwrH747zQhpVvT8ciRmTAbOHPnCFhN1q6fVbmbM03-WByUXrmWt~1O8qgndNtqxeDcS430bGYLc9zC8MHFMRWNyKuqnbzIbdrfVb~gwRsR~iJTA2jqweQwfIBgJPBYuMU23eF471PRQY~rMhDcgRYjVvtNNxOUeYcuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/7902/9451/2a77471ca443737bd2f40a7ceb702427?Expires=1596412800&Signature=QxfDtUYsUVxw4eTN5b3kFN7RoI8Y4Nxhy~ys3GTwgIolNUqFrMBvLqfeljXTl9z6r1Kxdm06yICs7wc-4hjYSg2611gjXPWSQicF6kqNT2WhgzeTEFdwwlJoSjNn9NhhmgrAGXTAX4UJ1hwgytOyDLaZQz38cjI3b5aR8wwJoeBXqBh0potBwrH747zQhpVvT8ciRmTAbOHPnCFhN1q6fVbmbM03-WByUXrmWt~1O8qgndNtqxeDcS430bGYLc9zC8MHFMRWNyKuqnbzIbdrfVb~gwRsR~iJTA2jqweQwfIBgJPBYuMU23eF471PRQY~rMhDcgRYjVvtNNxOUeYcuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/7902/9451/2a77471ca443737bd2f40a7ceb702427?Expires=1596412800&Signature=QxfDtUYsUVxw4eTN5b3kFN7RoI8Y4Nxhy~ys3GTwgIolNUqFrMBvLqfeljXTl9z6r1Kxdm06yICs7wc-4hjYSg2611gjXPWSQicF6kqNT2WhgzeTEFdwwlJoSjNn9NhhmgrAGXTAX4UJ1hwgytOyDLaZQz38cjI3b5aR8wwJoeBXqBh0potBwrH747zQhpVvT8ciRmTAbOHPnCFhN1q6fVbmbM03-WByUXrmWt~1O8qgndNtqxeDcS430bGYLc9zC8MHFMRWNyKuqnbzIbdrfVb~gwRsR~iJTA2jqweQwfIBgJPBYuMU23eF471PRQY~rMhDcgRYjVvtNNxOUeYcuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          case 'Papel Manteiga Wyda':
            productImagesLocal = [
              'https://s3-alpha-sig.figma.com/img/e40a/ba7e/8212c3201f326fcdfbd5cf86c6cf1aaf?Expires=1596412800&Signature=gMu64muUGdFy8PX0HaT5Fob5jnp5i2KSY2TcGNgJPTAI3OlizsvTuGCXCpAK2U2cthz7lokiiDOh6CzlXcNtp50h4Dts1rRTJ35Mrt0erF9QLrjcIdu2E2pd350NgIWiqhDCe7lAUtvmfQyVjQYKIP-cJUVo2P9fRxbHYtJYNsy-jxaEtzBfY2AvoO1YaIv~G2yO7A1oSAvoUsdBHXP2AcgAbCbbutWZa7Ma-XvUb-UdwBP8IpWYMJSpL5anlgTQ4MjTRJTB0-~32KKSujtBux2mJtdk0I8c-UWfUCz51Gdpvisso0UkKGmTBGSndcRwECdbD3K6RmNv7zH4Jgjw4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/e40a/ba7e/8212c3201f326fcdfbd5cf86c6cf1aaf?Expires=1596412800&Signature=gMu64muUGdFy8PX0HaT5Fob5jnp5i2KSY2TcGNgJPTAI3OlizsvTuGCXCpAK2U2cthz7lokiiDOh6CzlXcNtp50h4Dts1rRTJ35Mrt0erF9QLrjcIdu2E2pd350NgIWiqhDCe7lAUtvmfQyVjQYKIP-cJUVo2P9fRxbHYtJYNsy-jxaEtzBfY2AvoO1YaIv~G2yO7A1oSAvoUsdBHXP2AcgAbCbbutWZa7Ma-XvUb-UdwBP8IpWYMJSpL5anlgTQ4MjTRJTB0-~32KKSujtBux2mJtdk0I8c-UWfUCz51Gdpvisso0UkKGmTBGSndcRwECdbD3K6RmNv7zH4Jgjw4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/e40a/ba7e/8212c3201f326fcdfbd5cf86c6cf1aaf?Expires=1596412800&Signature=gMu64muUGdFy8PX0HaT5Fob5jnp5i2KSY2TcGNgJPTAI3OlizsvTuGCXCpAK2U2cthz7lokiiDOh6CzlXcNtp50h4Dts1rRTJ35Mrt0erF9QLrjcIdu2E2pd350NgIWiqhDCe7lAUtvmfQyVjQYKIP-cJUVo2P9fRxbHYtJYNsy-jxaEtzBfY2AvoO1YaIv~G2yO7A1oSAvoUsdBHXP2AcgAbCbbutWZa7Ma-XvUb-UdwBP8IpWYMJSpL5anlgTQ4MjTRJTB0-~32KKSujtBux2mJtdk0I8c-UWfUCz51Gdpvisso0UkKGmTBGSndcRwECdbD3K6RmNv7zH4Jgjw4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              'https://s3-alpha-sig.figma.com/img/e40a/ba7e/8212c3201f326fcdfbd5cf86c6cf1aaf?Expires=1596412800&Signature=gMu64muUGdFy8PX0HaT5Fob5jnp5i2KSY2TcGNgJPTAI3OlizsvTuGCXCpAK2U2cthz7lokiiDOh6CzlXcNtp50h4Dts1rRTJ35Mrt0erF9QLrjcIdu2E2pd350NgIWiqhDCe7lAUtvmfQyVjQYKIP-cJUVo2P9fRxbHYtJYNsy-jxaEtzBfY2AvoO1YaIv~G2yO7A1oSAvoUsdBHXP2AcgAbCbbutWZa7Ma-XvUb-UdwBP8IpWYMJSpL5anlgTQ4MjTRJTB0-~32KKSujtBux2mJtdk0I8c-UWfUCz51Gdpvisso0UkKGmTBGSndcRwECdbD3K6RmNv7zH4Jgjw4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            ];
            break;
          default:
            productImagesLocal = [
              'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg',
            ];
        }

        return {
          productName: value.productName,
          productBrand: value.productBrand,
          productPrice: value.productPrice,
          productSalePrice: value.productSalePrice,
          productIsMamboPlus: value.productIsMamboPlus,
          productIsOrganic: value.productIsOrganic,
          productHasStock: value.productHasStock,
          productDescription: value.productDescription,
          productImages: productImagesLocal,
        };
      });

      return result;
    },
  },
};
