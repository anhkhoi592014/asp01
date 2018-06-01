define({ "api": [
  {
    "type": "",
    "url": "(Post)",
    "title": "/Class/TaoLop Tạo một lớp mới",
    "group": "Class",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Malop",
            "description": "<p>Mã của lớp mới</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tenlop",
            "description": "<p>Tên của lớp mới</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"Malop\" : \"abc123\",\n     \"Tenlop\" : \"Công nghệ thông tin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Malop",
            "description": "<p>Mã của lớp vừa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Tenlop",
            "description": "<p>Tên của lớp vừa tạo</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Id",
            "description": "<p>Id của lớp mới</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "{\n     \"Id\" : \"1\",\n     \"Malop\" : \"bcd123\",\n     \"Tenlop\" : \"Công nghệ thông tin 2\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errors",
            "description": "<p>Mảng các lỗi</p>"
          }
        ]
      },
      "examples": [
        {
          "title": ": {json}",
          "content": "{\n     \"Errors\" : [\n         \"Mã lớp là trường bắt buộc\",\n         \"Tên lớp là trường bắt buộc\"\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Controllers/ClassController.cs",
    "groupTitle": "Class",
    "name": "Post"
  }
] });
