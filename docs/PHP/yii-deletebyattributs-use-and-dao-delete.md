---
title: Yii deleteByAttributs 用法，慎用Dao的delete
url: 751.html
id: 751
categories: PHP
tags:
  - Yii
date: 2013/05/30 22:35:38
---

Yii框架一定要慎用Dao的delete，一不小心它生不成条件的话，就变成了整表删除。 可以用ActiveRecord的deleteByAttributes或deleteAll方法相对不容易写错。 deleteByAttributes用法如下：

    MyClass::model()->deleteAllByAttributes(array(
        'phone_number'=>$phoneNumber,
    ));

或者第一个参数为空，使用第二个条件参数

    MyClass::model()->deleteAllByAttributes(array(),'`phone_number` = :phone_number',array(
        ':phone_number'=>$phoneNumber,
    ));

或者使用`deleteAll()`:

    MyClass::model()->deleteAll('`phone_number` = :phone_number',array(
        ':phone_number'=>$phoneNumber,
    ));

再来一个带in条件的

    $condition = new CDbCriteria();
    $condition->addCondition('status=:status');
    $condition->params = array(':status'=>1);
    $condition->addInCondition('user_id',array(100111,100221,100221));
    User::model()->deleteAll($condition);

Dao带in条件的示例


    Yii::app()->db->createCommand()
    ->delete('mw_user', array('and', 'user_id=:user_id', array('in', 'position_id', array(1,2,3))),array(':user_id'=>121111));

但是请慎用DAO的delete，当你的条件写错一点，它将无法生成where条件，同时sql语句中也没有了where，但还不一定报错，结果就成了没有where的delete，结果会是整表被删除了。