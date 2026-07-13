+++
title = "Java spring boot 串接資料庫"
date = 2023-07-10 14:09:52
draft = false
categories = ["Computer Science", "Programming Languages", "Framework", "Java Spring Boot"]
+++

{{% callout "info" %}}
**資料庫串接檔案配置**

檔案路徑: 
- ruoyi-admin/src/main/resources/application.yml
- ruoyi-admin/src/main/resources/application-druid.yml
{{% /callout %}}

# 資料庫搜尋

開始撰寫前，記得檢查資料庫配置文件是否修改正確!

## 信息操作處理

> 檔案路徑: ruoyi-admin/src/main/java/com.ruoyi/web/controller/system
> 創建檔案: ExerciseController

```java ExerciseController.java
package com.ruoyi.web.controller.system;

import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.system.domain.Exercise;
import com.ruoyi.system.service.IExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 参数配置 信息操作处理
 * 
 * @author ruoyi
 */
@RestController
@RequestMapping("/system/exercise")
public class ExerciseController extends BaseController
{
    @Autowired
    private IExerciseService exerciseService;

    @GetMapping("/List")
    public List<Exercise> selectExerciseList(){
        return exerciseService.selectExerciseList();
    };
}
```

## 參數配置表

> 檔案路徑: ruoyi-system/src/main/java/com.ruoyi.system/domain
> 創建檔案: Exercise.java

```java Exercise.java
package com.ruoyi.system.domain;

import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 参数配置表 exercise
 * 
 * @author ruoyi
 */
public class Exercise extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String exercise1;
    private String exercise2;
    private String exercise3;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getExercise1() {
        return exercise1;
    }

    public void setExercise1(String exercise1) {
        this.exercise1 = exercise1;
    }

    public String getExercise2() {
        return exercise2;
    }

    public void setExercise2(String exercise2) {
        this.exercise2 = exercise2;
    }

    public String getExercise3() {
        return exercise3;
    }

    public void setExercise3(String exercise3) {
        this.exercise3 = exercise3;
    }
}
```

## 數據層

> 檔案路徑: ruoyi-system/src/main/java/com.ruoyi.system/mapper
> 創建檔案: ExerciseMapper.java

```java ExerciseMapper.java
package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.Exercise;

import java.util.List;

/**
 * 参数配置 数据层
 * 
 * @author ruoyi
 */
public interface ExerciseMapper
{
    public List<Exercise> selectExerciseList();
}
```

## 服務層

> 檔案路徑: ruoyi-system/src/main/java/com.ruoyi.system/service/impl
> 創建檔案: ExerciseServiceImpl.java

```java ExerciseServiceImpl.java
package com.ruoyi.system.service.impl;

import com.ruoyi.common.core.redis.RedisCache;
import com.ruoyi.system.domain.Exercise;
import com.ruoyi.system.mapper.ExerciseMapper;
import com.ruoyi.system.service.IExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 参数配置 服务层实现
 * 
 * @author ruoyi
 */
@Service
public class ExerciseServiceImpl implements IExerciseService
{
    @Autowired
    private ExerciseMapper exerciseMapper;

    @Autowired
    private RedisCache redisCache;

    public List<Exercise> selectExerciseList(){
        return exerciseMapper.selectExerciseList();
    };
}
```

> 檔案路徑: ruoyi-system/src/main/java/com.ruoyi.system/service
> 創建檔案: IExerciseService.java

```java IExerciseService.java
package com.ruoyi.system.service;

import com.ruoyi.system.domain.Exercise;

import java.util.List;

/**
 * 参数配置 服务层
 * 
 * @author ruoyi
 */
public interface IExerciseService
{
    public List<Exercise> selectExerciseList();
}
```

## SQL 內容

> 檔案路徑: ruoyi-system/src/main/resources/mapper.system
> 創建檔案: ExerciseMapper.xml

```xml ExerciseMapper.xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.ruoyi.system.mapper.ExerciseMapper">
    
    <resultMap type="Exercise" id="ExerciseResult">
    	<id     property="id"      column="id"      />
        <result property="exercise1"    column="exercise_1"    />
        <result property="exercise2"     column="exercise_2"     />
        <result property="exercise3"   column="exercise_3"   />
    </resultMap>
    
    <sql id="selectExerciseVo">
        select * from exercise
    </sql>
    
    <select id="selectExerciseList" resultMap="ExerciseResult">
        <include refid="selectExerciseVo"/>
    </select>
</mapper>
```

# 資料庫新增