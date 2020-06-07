---
title: php生成excel列名，超过26列大于Z的方法
url: 755.html
id: 755
categories: PHP
tags:
  - excel
  - phpExcel
  - php
date: 2013/08/07 16:47:08
---

这是phpExcel类中的方法。今天查到了，记录一下备忘。

```php
public static function stringFromColumnIndex($pColumnIndex = 0)
    {
        //  Using a lookup cache adds a slight memory overhead, but boosts speed
        //  caching using a static within the method is faster than a class static,
        //      though it's additional memory overhead
        static $_indexCache = array();
 
        if (!isset($_indexCache[$pColumnIndex])) {
            // Determine column string
            if ($pColumnIndex < 26) {
                $_indexCache[$pColumnIndex] = chr(65 + $pColumnIndex);
            } elseif ($pColumnIndex < 702) {
                $_indexCache[$pColumnIndex] = chr(64 + ($pColumnIndex / 26)) .
                                              chr(65 + $pColumnIndex % 26);
            } else {
                $_indexCache[$pColumnIndex] = chr(64 + (($pColumnIndex - 26) / 676)) .
                                              chr(65 + ((($pColumnIndex - 26) % 676) / 26)) .
                                              chr(65 + $pColumnIndex % 26);
            }
        }
        return $_indexCache[$pColumnIndex];
    }
```

将列的数字序号转成字母使用： 
```
PHPExcel_Cell::stringFromColumnIndex($i); // 从o开始 
```
将列的字母转成数字序号使用： 
```
PHPExcel_Cell::columnIndexFromString('AA');
```
